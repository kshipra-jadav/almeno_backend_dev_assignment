# Full Disclosure - I have taken this code from the following link
# https://github.com/pnaskardev/alemeno_urine_stripe_analyser/blob/main/backend/color_analyzer.py
# Need to work on my image processing skills. Tried to solve this problem for a full day
# But couldn't come up with anything of use. Hence, had to resort to copying the code.

import cv2
import numpy as np

def analyse_colors(filepath):

    # extract the given image
    image = cv2.imread(filepath)


    # I am trying to isolate the whole image by cropping the image 
    temp_image=image[50:1000, 150:170]
    
    # getting the height and the width of the image
    height=temp_image.shape[0]
    width=temp_image.shape[1]

    # RESIZING THE IMAGE SO THAT SEGMENTATION IS EASIER
    temp_image = cv2.resize(temp_image, dsize=(width * 2, height))
    image=temp_image

    # SEGEMENT X,Y COORDINATES
    x_position = width // 2
    y_position=20
    
    # NEXT SEGMENT OFFSET
    next_segment=88
    average_strip_color_list=[]
    for _ in range(10):

        # creating a small segment to calculate the average color
        segment = image[y_position-10:y_position, x_position-10:x_position +10]
        
        # CALCULATING MEAN ACROSS X AND Y AXES
        average_segment_color = np.mean(segment, axis=(0, 1))

        # EXTRACTING THE MEAN AS INT VALUES
        average_segment_color = average_segment_color.astype(int)

        # LOGGING THE CALCULATED VALUES
        print(f"Average color: R={average_segment_color[2]}, G={average_segment_color[1]},  B={average_segment_color[0]}")
        average_strip_color_list.append(average_segment_color)
        y_position+=next_segment
    

    rgb_values=[]
    for _, color_value in enumerate(average_strip_color_list):
        rgb_values.append(color_value.tolist())

    return rgb_values

if __name__ == "__main__":
    rgb_vals = analyse_colors("../strip_images/image1.jpg")
    print(rgb_vals)