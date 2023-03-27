from django.shortcuts import render
from rest_framework import generics
from .serializer import NovelSerializer, ChapterSerializer
from .models import Novel, Chapter
# Create your views here.
# Use APIView to handle get/post requests with request body content
class NovelView(generics.ListAPIView):
    queryset = Novel.objects.all()
    serializer_class = NovelSerializer

class ChapterView(generics.ListAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer