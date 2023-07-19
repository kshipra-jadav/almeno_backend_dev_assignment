import numpy as np
import cv2

def bytes_to_numpy(img_bytes: bytes) -> np.ndarray:
    return np.fromstring(img_bytes, np.uint8)

def numpy_to_img(img_array: np.ndarray) -> np.ndarray:
    return cv2.imdecode(img_array, cv2.IMREAD_UNCHANGED)
