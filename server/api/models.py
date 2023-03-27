from django.db import models

# Create your models here.
class Novel(models.Model):
    title = models.CharField(max_length = 200, unique=True)
    author = models.CharField(max_length = 200)
    description = models.TextField()

class Chapter(models.Model):
    novel = models.ForeignKey(Novel, on_delete=models.CASCADE)
    number = models.PositiveSmallIntegerField()
    title = models.CharField(max_length = 200)
    content = models.TextField()