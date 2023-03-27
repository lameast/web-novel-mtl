from rest_framework import serializers
from .models import Novel, Chapter

class NovelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Novel
        fields = ('id', 'title', 'author', 'description')

class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = ('id', 'novel', 'number', 'title', 'content')