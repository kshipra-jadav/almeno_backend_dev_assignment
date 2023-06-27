from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ColourCodeSerializer
from .models import ColourCode


class ColourCodeViews(APIView):
    def post(self, request):
        data = request.data
        print(data)
        
        serializer = ColourCodeSerializer(data=data)
        if serializer.is_valid():
            return Response(
                {
                    "status": "success",
                    "data": data
                },
                status=status.HTTP_200_OK
            )
        else:
            return Response(
                {
                    "status": "error",
                    "data": serializer.errors
                },
                status=status.HTTP_400_BAD_REQUEST
            )