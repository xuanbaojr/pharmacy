import os
import glob
from PIL import Image,ImageOps
import matplotlib.pyplot as plt
import numpy as np
from matplotlib import patches
import torch
import json
from torchvision import transforms
from models.efficient import EfficientNet
from ultralytics import YOLO
from torchvision.transforms import v2


device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

current_dir = os.path.dirname(__file__)
pill_eff_weights_path = os.path.join(current_dir, "..", "weights", "pill_iden.pth")
version = 'b3'  

pill_yolo_weights_path = os.path.join(current_dir, "..", "weights", "pill_yolo.pt")
pill_yolo_model = YOLO(pill_yolo_weights_path)


y_preds = []

def pill_predict(im_path):

    im_path = os.path.join(current_dir, "..", "images", im_path)
    im = Image.open(im_path)
    im = ImageOps.exif_transpose(im)

    fig, ax = plt.subplots(1)
    ax.imshow(im)
    im_array = np.array(im)

    model = EfficientNet(version, num_classes=107).to(device)
    if os.path.exists(pill_eff_weights_path):
        print("Found a pill_iden weight !")
        if device == "cude":
            model.load_state_dict(torch.load(pill_eff_weights_path, weights_only=True))
        else:
            model.load_state_dict(torch.load(pill_eff_weights_path, weights_only=True, map_location="cpu"))
    model.eval()

    results = pill_yolo_model(source=im)
    for result in results:
        for box in result.boxes:
            box_xyxy = box.xyxy[0].cpu().numpy()  
            x1, y1, x2, y2 = box_xyxy  
            w, h = x2 - x1, y2 - y1
            ax.add_patch(patches.Rectangle((x1, y1), w, h, linewidth=2, edgecolor='red', facecolor='none'))

            img_detected = im_array[int(y1):int(y2), int(x1):int(x2)]
            img_detected = Image.fromarray(img_detected)  
            transform = v2.Compose([
                v2.ToTensor(),
                v2.Resize((300, 300)),
                v2.RandomHorizontalFlip(p=0.5),
                v2.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
                
            ])
            im_tensor = transform(img_detected).unsqueeze(0).to(device)

            with torch.no_grad():
                y_pred = model(im_tensor)
                y_pred = torch.argmax(y_pred, dim=-1).item()

                y_preds.append(y_pred)

    plt.show()
    return y_preds
