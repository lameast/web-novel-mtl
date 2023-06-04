from django.db import models

# Create your models here.
# TODO: create model for genres and tags
class Novel(models.Model):
    title = models.CharField(max_length = 200, unique=True)
    author = models.CharField(max_length = 200)
    description = models.TextField()

class Chapter(models.Model):
    novel = models.ForeignKey(Novel, on_delete=models.CASCADE)
    number = models.PositiveSmallIntegerField()
    title = models.CharField(max_length = 200)
    content = models.TextField()

class Tag(models.Model):
    tagName = models.CharField(max_length = 200, unique=True)

class Tagging(models.Model):
    novel = models.ForeignKey(Novel, on_delete=models.CASCADE)
    tagId = models.ForeignKey(Tag, on_delete=models.CASCADE)

class Genre(models.Model):
    genreName = models.CharField(max_length = 200, unique=True)

class NovelGenre(models.Model):
    genreId = models.ForeignKey(Genre, on_delete=models.CASCADE)
    novel = models.ForeignKey(Novel, on_delete=models.CASCADE)