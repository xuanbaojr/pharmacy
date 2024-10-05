from fastapi import FastAPI, File, UploadFile
import uuid

from OCR.CRNN.predict import predict_text

image_dir = "images/"
app = FastAPI()

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file.filename = "img_01.png"
    contents = await file.read()

    with open(f"{image_dir}{file.filename}", "wb") as f:
        f.write(contents)
    
    text = predict_text(file.filename)

    return {"filename": text}
