from fastapi import FastAPI, File, UploadFile
import uuid
import os
from tools.pill_predict import pill_predict
from tools.pre_predict import pre_predict


image_dir = "images/"
os.makedirs(image_dir, exist_ok=True)
app = FastAPI()

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file.filename = "img_01.jpg"
    contents = await file.read()

    with open(f"{image_dir}{file.filename}", "wb") as f:
        f.write(contents)
    
    img_path = f"{file.filename}"
    detected_string = pre_predict(img_path)

    detected_string = [
                        {
                            "quantity": "28",
                            "drugname": "RENAPRIL",
                            "usage": [
                            "Sáng 1 viên",
                            "Tối 1 viên"
                            ]
                        },
                        {
                            "drugname": "NOVOXIM",
                            "quantity": "20",
                            "usage": [
                                "Tối 1 viên"
                            ]
                        }
                    ]
    return detected_string

# @app.get("/upload")
# async def upload_file(file: UploadFile = File(...)):
#     file.filename = "img_01.png"
#     contents = await file.read()

#     with open(f"{image_dir}{file.filename}", "wb") as f:
#         f.write(contents)
    
#     img_path = f"{image_dir}{file.filename}"
#     yolo_checkpoint_path = "OCR/detection/weights/drugname_detection.pt"
    
#     yolo_predictor = Yolo_Prescription(img_path, yolo_checkpoint_path)
#     detected_string = yolo_predictor.img_detect()
#     print("len(detected_string):", len(detected_string))

#     return {"filename": detected_string}