from fastapi import FastAPI, File, UploadFile
import uuid
import os
from tools.pill_predict import pill_predict
from tools.pre_predict import pre_predict
from fastapi.middleware.cors import CORSMiddleware


image_dir = "images/"
os.makedirs(image_dir, exist_ok=True)
app = FastAPI()

app.add_middleware(
    CORSMiddleware, # https://fastapi.tiangolo.com/tutorial/cors/
    allow_origins=['*'], # wildcard to allow all, more here - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
    allow_credentials=True, # https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials
    allow_methods=['*'], # https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods
    allow_headers=['*'], # https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
)

@app.get("/")
async def hello_world():
    return {"hello:": "world !!"}

@app.post("/prescription")
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

# import nest_asyncio
# from pyngrok import ngrok
# import uvicorn


# # specify a port
# port = 8001
# ngrok_tunnel = ngrok.connect(port)

# # where we can visit our fastAPI app
# print('Public URL:', ngrok_tunnel.public_url)


# nest_asyncio.apply()

# if __name__ =="__main__":
#     uvicorn.run(app, port=port)