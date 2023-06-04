from rest_framework import serializers
from .models import Novel, Chapter, Tag, Genre

class NovelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Novel
        fields = ('id', 'title', 'author', 'description')

class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = ('id', 'novel', 'number', 'title', 'content')

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'tagName')

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('id', 'genreName')