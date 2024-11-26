FROM python:3.9

WORKDIR /app


COPY ./requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt
RUN apt-get update \ 
    && apt-get install -y --no-install-recommends ffmpeg \
    && pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu 

COPY . /app




