from fastapi import FastAPI, File, UploadFile
import uuid

from OCR.predict import ocr

image_dir = "images/"
app = FastAPI()

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file.filename = f"{image_dir}{uuid.uuid4()}.jpg"
    contents = await file.read()

    with open(f"{file.filename}", "wb") as f:
        f.write(contents)
    
    text = ocr(file.filename)

    return {"filename": text}
