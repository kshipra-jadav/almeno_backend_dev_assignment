from django.urls import path
from .views import ColourCodeViews

urlpatterns = [
    path("colour-codes/", ColourCodeViews.as_view())
]