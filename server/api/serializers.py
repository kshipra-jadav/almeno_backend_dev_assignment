from rest_framework import serializers
from .models import ColourCode

class ColourCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ColourCode
        fields = '__all__'
