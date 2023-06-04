from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import NovelSerializer, ChapterSerializer, TagSerializer, GenreSerializer
from .models import Novel, Chapter, Tag, Genre

import logging
import sys

logging.basicConfig(stream=sys.stdout, level=logging.DEBUG)
# Create your views here.
# Use APIView to handle get/post requests with request body content
class SearchNovels(APIView):
    """
    View for searching up novels: Name, genre, tags
    """
    pass

class ShowNovel(APIView):
    """
    View for showing a novel after clicking on a link on the site to the novel
    """
    #queryset = Novel.objects.all()
    serializer_class = NovelSerializer
    def get(self, request, format = None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            novel = Novel.objects.filter(title__exact=request.data.title)
            return Response(self.serializer_class(novel[0]).data, status=status.HTTP_200_OK)

class ShowChapter(APIView):
    #queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

    def get(self, request, format = None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            chapter = Chapter.objects.filter(
                novel__title=request.data.title
                ).filter(number__exact=request.data.number)
            return Response(self.serializer_class(chapter[0]).data, status=status.HTTP_200_OK)

class ShowAllTags(APIView):

    serializer_class = TagSerializer

    def get(self, request, format = None):

        tags = Tag.objects.all()

        return Response(self.serializer_class(tags, many=True).data, status=status.HTTP_200_OK)

class ShowAllGenres(APIView):

    serializer_class = GenreSerializer

    def get(self, request, format = None):

        genres = Genre.objects.all()

        return Response(self.serializer_class(genres, many=True).data, status=status.HTTP_200_OK)

class AddNovel(APIView):
    serializer_class = NovelSerializer

    def post(self, request, format = None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            novel = Novel(title=request.data.title, author=request.data.author, description=request.data.description)
            novel.save()
            return Response(self.serializer_class(novel).data, status=status.HTTP_200_OK)
        
class AddChapter(APIView):
    serializer_class = ChapterSerializer

    def post(self, request, format = None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            chapter = Chapter(novel=request.data.novel, title=request.data.title, number=request.data.number, content=request.data.content)
            chapter.save()
            return Response(self.serializer_class(chapter).data, status=status.HTTP_200_OK)

class AddTag(APIView):
    serializer_class = TagSerializer

    def post(self, request, format = None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            tagName = request.data['tagName']
            tag = Tag.objects.create(
                tagName=tagName
            )
            return Response(self.serializer_class(tag).data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class AddGenre(APIView):
    serializer_class = GenreSerializer

    def post(self, request, format = None):
        serializer = self.serializer_class(data=request.data)
        logging.getLogger().info(request.data)
        if serializer.is_valid():
            genreName = request.data['genreName']
            genre = Genre.objects.create(
                genreName=genreName
            )
            
            return Response(self.serializer_class(genre).data, status=status.HTTP_201_CREATED)

        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        