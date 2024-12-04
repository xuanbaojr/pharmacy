import os
import cv2
import numpy as np
import tensorflow.keras.backend as K
from models.ocr import init_model
from ultralytics import YOLO
import pandas as pd
from Levenshtein import distance as levenshtein_distance
from PIL import Image
import matplotlib.pyplot as plt
from matplotlib import patches


# Load the OCR model and weights
act_model = init_model()
current_dir = os.path.dirname(__file__)
weights_path = os.path.join(current_dir, "..", "weights", "ocr.weights.h5")
act_model.load_weights(weights_path)

yolo_weights = os.path.join(current_dir, "..", "weights", "pre_yolo.pt")
yolo_model = YOLO(yolo_weights)

drugname_path = os.path.join(current_dir, "..", "data", "drugnames.txt")

char_list = [' ', '#', "'", '(', ')', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'Â', 'Ã', 'Ê', 'Í', 'Ô', 'à', 'á', 'â', 'ã', 'è', 'é', 'ê', 'ì', 'í', 'ò', 'ó', 'ô', 'õ', 'ù', 'ú', 'ý', 'ă', 'Đ', 'đ', 'ĩ', 'ũ', 'Ơ', 'ơ', 'Ư', 'ư', 'Ạ', 'ạ', 'ả', 'ấ', 'Ầ', 'ầ', 'ẩ', 'ậ', 'ắ', 'ằ', 'ẵ', 'ặ', 'ẻ', 'ẽ', 'Ế', 'ế', 'ề', 'ể', 'ễ', 'Ệ', 'ệ', 'ỉ', 'ị', 'ọ', 'ỏ', 'Ố', 'ố', 'ồ', 'ổ', 'ỗ', 'Ộ', 'ộ', 'ớ', 'ờ', 'ở', 'Ỡ', 'ỡ', 'ợ', 'ụ', 'ủ', 'Ứ', 'ứ', 'ừ', 'ử', 'ữ', 'ự', 'ỳ', 'ỵ', 'ỷ', 'ỹ']

def preprocess_img(detected_image):
        height, width = detected_image.shape
        img = cv2.resize(detected_image,(int(118/height*width),118))
        height, width = img.shape
        img = np.pad(img, ((0,0), (0, 2522 - width)), 'median')
        img = cv2.GaussianBlur(img, (5,5), 0)
        img = cv2.adaptiveThreshold(img, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 11, 4)
        img = img / 255.0
        img = np.expand_dims(img, axis = 2)
        return img

def get_accuracy(pred_text):
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


def text_predict(im, x1, y1, x2, y2):
    test_imgs = []
    cropped_img = im[y1:y2, x1:x2]
    gray_img = cv2.cvtColor(cropped_img, cv2.COLOR_BGR2GRAY)
    preprocessed_img = preprocess_img(gray_img)
    test_imgs.append(preprocessed_img)
    test_imgs = np.array(test_imgs)


    predictions = act_model.predict(test_imgs)
    decoded_preds = K.get_value(K.ctc_decode(predictions, input_length=np.ones(predictions.shape[0]) * predictions.shape[1], greedy=True)[0][0])

    for decoded_pred in decoded_preds:
        pred_text = ''.join([char_list[int(p)] for p in decoded_pred if int(p) != -1])
        pred_text = get_accuracy(pred_text)

    return pred_text


def pre_predict(im):
    """Predict text in an image using YOLO for object detection and OCR for text recognition."""
    im_path = os.path.join(current_dir, "..", "images", im)
    img = cv2.imread(im_path)

    im_mat = Image.open(im_path)
    fig, ax = plt.subplots(1)
    ax.imshow(im_mat)
    
    results = yolo_model(img)
    y_preds = []
    dict = {}

    for result in results:
        sorted_boxes = sorted(result.boxes, key=lambda box: box.data[0].cpu().numpy()[1])
    
        for index, box in enumerate(sorted_boxes):
            x1, y1, x2, y2, _, label = map(int, box.data[0].cpu().numpy())
            ax.add_patch(patches.Rectangle((x1,y1), x2-x1, y2-y1))

            text_pred = text_predict(img, x1, y1, x2, y2)
            if label == 0:
                dict["drugname"] = text_pred

            if label == 1:     # quantity
                dict["quantity"] = text_pred

            if label == 2 and int(sorted_boxes[index-1].data[0].cpu().numpy()[5]) == 1:
                dict["usage"] = [text_pred, text_predict(img,
                                                         int(sorted_boxes[index-1].data[0].cpu().numpy()[0]), 
                                                         int(sorted_boxes[index-1].data[0].cpu().numpy()[1]),
                                                         int(sorted_boxes[index-1].data[0].cpu().numpy()[2]),
                                                         int(sorted_boxes[index-1].data[0].cpu().numpy()[3]))]
                y_preds.append(dict)
                dict = {}

    # plt.show()
    return y_preds

if __name__ == "__main__":
    im = "img_01.jpg"
    y_preds = pre_predict(im)
    print(y_preds)
