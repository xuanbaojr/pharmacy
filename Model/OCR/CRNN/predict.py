
from .model import init_model
import cv2
import matplotlib.pyplot as plt
import numpy as np
import tensorflow.keras.backend as K
import os


# load the saved best model weights
act_model = init_model()
current_dir = os.path.dirname(__file__)
weights_path = os.path.join(current_dir, "weights", "checkpoint_weights.weights.h5")
act_model.load_weights(weights_path)

# predict outputs on validation images
NO_PREDICTS = 100
OFFSET=0

char_list = [' ', '#', "'", '(', ')', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', 'A', 'B', 'C', 'D', 'E', 'F', 
                'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'a', 'b', 'c', 'd', 'e', 'g', 'h', 'i', 
                'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'Â', 'Ê', 'Ô', 'à', 'á', 'â', 'ã', 'è', 'é', 'ê', 'ì',
                'í', 'ò', 'ó', 'ô', 'õ', 'ù', 'ú', 'ý', 'ă', 'Đ', 'đ', 'ĩ', 'ũ', 'Ơ', 'ơ', 'ư', 'ạ', 'ả', 'ấ', 'ầ', 'ẩ', 'ậ', 'ắ', 'ằ', 'ẵ', 'ặ', 'ẻ', 
                'ẽ', 'ế', 'ề', 'ể', 'ễ', 'ệ', 'ỉ', 'ị', 'ọ', 'ỏ', 'ố', 'ồ', 'ổ', 'ỗ', 'ộ', 'ớ', 'ờ', 'ở', 'ỡ', 'ợ', 'ụ', 'ủ', 'Ứ', 'ứ', 'ừ', 'ử', 'ữ',
                'ự', 'ỳ', 'ỵ', 'ỷ', 'ỹ']



def preprocess_img(img):
    height, width = img.shape
    print(f"height, width:" ,height, width)
    img = cv2.resize(img, (int(2167),118))
    height, width = img.shape
    
    # if width < 2167:
    #     img = np.pad(img, ((0,0), (0,2167-width)), "median")
    # else:
    #     img = cv2.resize(img, (2167, 118))
    img = cv2.GaussianBlur(img, (5,5), 0)
    img = cv2.adaptiveThreshold(img, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 11, 4)
    img = np.expand_dims(img, axis = 2)
    img = img / 255.0

    return img

def predict_text(img_path):
    test_img = []
    images_dir = os.path.join(current_dir, "..")
    images_dir = os.path.join(images_dir, "..")
    img_path = os.path.join(images_dir, "images", img_path)
    print("img_path:" + img_path)
    img = cv2.cvtColor(cv2.imread(img_path),cv2.COLOR_BGR2GRAY)
    img = preprocess_img(img)
    test_img.append(img)
    test_img = np.array(test_img)
    print(test_img.shape)
    prediction = act_model.predict(test_img)

    out = K.get_value(K.ctc_decode(prediction, input_length=np.ones(prediction.shape[0])*prediction.shape[1],
                            greedy=True)[0][0])
    # see the results
    all_predictions =[]
    i = 0
    for x in out:
        print("predicted text = ", end = '')
        pred = ""
        for p in x:  
            if int(p) != -1:
                pred += char_list[int(p)]
        print(pred)
        all_predictions.append(pred)
        i+=1

    return all_predictions