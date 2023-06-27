from django.db import models

# Create your models here.

class ColourCode(models.Model):
    colour_codes = models.JSONField()