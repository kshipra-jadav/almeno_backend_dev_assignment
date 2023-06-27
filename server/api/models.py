from django.db import models

# Create your models here.

class ColourCode(models.Model):
    urine_strip = models.ImageField()
    created_at = models.DateTimeField(auto_now_add=True)