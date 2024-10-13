import matplotlib.pyplot as plt
import matplotlib.patches as patches
from ..CRNN.predict import CRNN
from ultralytics import YOLO
from PIL import Image
import numpy as np
import cv2

# Open the image using PIL
class Yolo_Prescription():
    def __init__(self, img_path, checkpoint_path):
        self.img_path = img_path
        self.checkpoint_path = checkpoint_path
    
    def img_detect(self):
        detected_string = []
        img = Image.open(self.img_path)
        model = YOLO(self.checkpoint_path)
        results = model.predict(source=img)
        im_array = np.array(img)
        print("im_array.shape:", im_array.shape)


        fig, ax = plt.subplots(1)
        ax.imshow(im_array)

        # Loop through each result to get bounding boxes
        for result in results:
            for box in result.boxes:
                box_xyxy = box.xyxy[0].cpu().numpy()  #
                x1, y1, x2, y2 = box_xyxy  # Get the coordinates
                

                img_detected = im_array[int(y1):int(y2), int(x1):int(x2)]
                RNNN_model = CRNN(img_detected)
                detected_string.append(RNNN_model.predict_text())

                width = x2 - x1
                height = y2 - y1
                
                rect = patches.Rectangle((x1, y1), width, height, linewidth=2, edgecolor='red', facecolor='none')
                ax.add_patch(rect)

        # Show the plot
        plt.axis('off')  # Hide the axis
        plt.show()
        
        return detected_string

