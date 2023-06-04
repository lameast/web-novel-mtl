from django.urls import path
from .views import AddChapter, AddGenre, AddNovel, AddTag, ShowAllGenres, ShowAllTags

urlpatterns = [
    path('novel', AddNovel.as_view()),
    path('addChapter', AddChapter.as_view()),
    path('genre', AddGenre.as_view()),
    path('tag', AddTag.as_view()),
    path('showTags', ShowAllTags.as_view()),
    path('showGenres', ShowAllGenres.as_view()),
]