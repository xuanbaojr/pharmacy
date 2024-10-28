import os
import cv2
import numpy as np
import tensorflow.keras.backend as K
from models.ocr import init_model
from ultralytics import YOLO
import pandas as pd
from Levenshtein import distance as levenshtein_distance


# Load the OCR model and weights
act_model = init_model()
current_dir = os.path.dirname(__file__)
weights_path = os.path.join(current_dir, "..", "weights", "ocr.weights.h5")
act_model.load_weights(weights_path)

# Load YOLO model with weights
yolo_weights = os.path.join(current_dir, "..", "weights", "pre_yolo.pt")
yolo_model = YOLO(yolo_weights)

drugname_path = os.path.join(current_dir, "..", "data", "drugnames.txt")

# Character list for decoding OCR predictions
char_list = [
    ' ', "'", '(', ')', '+', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', ';', 'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z', 'Â', 'Ã', 'Ê', 'Í', 'Đ', 'Ư', 'Ạ', 'Ầ',
    'Ế', 'Ệ', 'Ố', 'ố', 'Ộ', 'Ỡ'
]

def preprocess_img(detected_image):
    """Preprocess image for OCR prediction."""
    height, width = detected_image.shape
    img = cv2.resize(detected_image, (int(118 / height * width), 118))
    img = np.pad(img, ((0, 0), (0, max(0, 2522 - img.shape[1]))), 'median')
    img = cv2.GaussianBlur(img, (5, 5), 0)
    img = cv2.adaptiveThreshold(img, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 11, 4)
    img = np.expand_dims(img, axis=2) / 255.0
    return img

def get_accuracy(pred_text):
    print("text_pred", pred_text)
    drugname_data = pd.read_csv(drugname_path, on_bad_lines='skip')
    min_distance = float('inf')
    closest_text = ""

    for _, row in drugname_data.iterrows():
        row_text = str(row[0])
        current_distance = levenshtein_distance(row_text, pred_text)
        
        if current_distance < min_distance:
            min_distance = current_distance
            closest_text = row_text

    return closest_text

def pre_predict(im):
    """Predict text in an image using YOLO for object detection and OCR for text recognition."""
    im_path = os.path.join(current_dir, "..", "images", im)
    img = cv2.imread(im_path)
    
    results = yolo_model(img)
    test_imgs, y_preds = [], []

    for result in results:
        for box in result.boxes:
            x1, y1, x2, y2 = map(int, box.xyxy[0].cpu().numpy())
            cropped_img = img[y1:y2, x1:x2]
            gray_img = cv2.cvtColor(cropped_img, cv2.COLOR_BGR2GRAY)
            preprocessed_img = preprocess_img(gray_img)
            test_imgs.append(preprocessed_img)

    test_imgs = np.array(test_imgs)

    predictions = act_model.predict(test_imgs)
    decoded_preds = K.get_value(K.ctc_decode(predictions, input_length=np.ones(predictions.shape[0]) * predictions.shape[1], greedy=True)[0][0])

    for decoded_pred in decoded_preds:
        pred_text = ''.join([char_list[int(p)] for p in decoded_pred if int(p) != -1])
        pred_text = get_accuracy(pred_text)
        y_preds.append(pred_text)
        print("Predicted text:", pred_text)

    return y_preds
