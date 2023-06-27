import numpy as np

def make_response(rgb_vals: np.ndarray) -> dict:
    colour_codes = ["URO", "BIL", "KET", "BLD", "PRO", "NIT", "LEU", "GLU", "SG", "PH"]
    urine_strip = dict()

    for i in range(len(rgb_vals)):
        urine_strip[colour_codes[i]] = rgb_vals[i]
    
    return urine_strip


