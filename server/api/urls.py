from django.urls import path
from .views import NovelView

urlpatterns = [
    path('home', NovelView.as_view())
]