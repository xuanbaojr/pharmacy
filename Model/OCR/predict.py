import cv2
import pytesseract

def ocr(image_dir):
    img_cv = cv2.imread(image_dir)
    img_rgb = cv2.cvtColor(img_cv, cv2.COLOR_BGR2RGB)
    text_result = pytesseract.image_to_string(img_rgb)
    return text_result

