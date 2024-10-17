
from .model import init_model
import cv2
import matplotlib.pyplot as plt
import numpy as np
import tensorflow.keras.backend as K
import os
import pandas as pd


# load the saved best model weights
act_model = init_model()
current_dir = os.path.dirname(__file__)
weights_path = os.path.join(current_dir, "weights", "drugname_ocr.weights.h5")
act_model.load_weights(weights_path)

# predict outputs on validation images

char_list =[' ', "'", '(', ')', '+', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', ';', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L',
                 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'r', 's',
                   't', 'u', 'v', 'x', 'y', 'z', 'Â', 'Ã', 'Ê', 'Í', 'Đ', 'Ư', 'Ạ', 'Ầ', 'Ế', 'Ệ', 'Ố', 'ố', 'Ộ', 'Ỡ']

class CRNN():
    def __init__(self, img):
        self.img = img

    def preprocess_img(self, detected_image):
    
        height, width = detected_image.shape
        img = cv2.resize(detected_image,(int(118/height*width),118))
        height, width = img.shape
        
        img = np.pad(img, ((0,0), (0, 2522 - width)), 'median')
        img = cv2.GaussianBlur(img, (5,5), 0)
        img = cv2.adaptiveThreshold(img, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 11, 4)
        img = np.expand_dims(img, axis = 2)
        img = img / 255.0

        return img

    def predict_text(self):
        test_img = []

        img = cv2.cvtColor(self.img,cv2.COLOR_BGR2GRAY)
        img = self.preprocess_img(img)

        test_img.append(img)
        test_img = np.array(test_img)
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