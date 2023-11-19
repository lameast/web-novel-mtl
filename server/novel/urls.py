from django.urls import path, include
from .views import (
    TagsApiView,
    NovelApiView,
    NovelDetailApiView
)

urlpatterns = [
    path('api', TagsApiView.as_view()),
    path('api/search', NovelApiView.as_view()),
    path('api/noveldetail', NovelDetailApiView.as_view())
]