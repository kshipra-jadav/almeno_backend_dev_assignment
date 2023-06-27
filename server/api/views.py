from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .serializers import ColourCodeSerializer

from .utils.process_image import bytes_to_numpy, numpy_to_img
from .utils.color_detection import analyse_colors
from .utils.make_response import make_response



class ColourCodeViews(APIView):
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = ColourCodeSerializer
    def post(self, request, *args, **kwargs):
        _serializer = self.serializer_class(data=request.data)
        if _serializer.is_valid():
            uploaded_file = request.data["urine_strip"]

            np_img = bytes_to_numpy(uploaded_file.read())
            image = numpy_to_img(np_img)
            rgb_array = analyse_colors(image_array=image)
            urine_strip_colours = make_response(rgb_vals=rgb_array)

            return Response(
                data={
                    "urine_strip_colours": urine_strip_colours, 
                    "status": status.HTTP_200_OK
                    }, 
                status=status.HTTP_201_CREATED)
        else:
            return Response(data=_serializer.errors, status=status.HTTP_400_BAD_REQUEST)