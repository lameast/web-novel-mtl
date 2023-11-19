from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import TblTags, TblNovelInfo, TblQlookupNovelTags, TblNovelMetaInfo, TblChapters
from .serializers import TagsSerializer, NovelInfoSerializer
from django.db.models import Count
from drf_yasg.utils import swagger_auto_schema
from itertools import chain

# Create your views here.
class TagsApiView(APIView):

    permission_classes = [permissions.AllowAny]
    def get(self, request, *args, **kwargs):
        '''
        Gets all tags
        '''
        tags = TblTags.objects.values("tags_name", "genre_flag")
        serializer = TagsSerializer(tags, many=True, fields=("tags_name", "genre_flag"))
        return Response(serializer.data, status=status.HTTP_200_OK)

class NovelApiView(APIView):

    permission_classes = [permissions.AllowAny]

    @swagger_auto_schema(request_body=NovelInfoSerializer)
    def post(self, request, *args, **kwargs):
        '''
        Returns all novels that match the search criteria in request
        '''
        serializer = NovelInfoSerializer(data = request.data, fields=("translated_title", "tags"))
        print(serializer)
        if serializer.is_valid():
            data = serializer.data
            title = data["translated_title"]
            tags = data["tags"] #Keep track of tag id when passing between backend and frontend
            tag_names = map(lambda tag: tag["tags_name"], tags)

            tag_ids = TblTags.objects.filter(tags_name__in=tag_names).values("tags_key")
            matched_novels_with_tag = TblQlookupNovelTags.objects.filter(tags_key__in=tag_ids).values("book_key").annotate(cnt=Count('tags_key')).filter(cnt__lte=len(tag_ids)).values("book_key")
            matched_novels = TblNovelMetaInfo.objects.filter(book_key__in=matched_novels_with_tag, book_key__translated_title__icontains=title).values("description", "lee_s_description", "book_key__translated_title", "book_key")
            novels = list(matched_novels)
            novels = [{"translated_title": novel['book_key__translated_title'], "meta_info": {"book_key": novel["book_key"], "description": novel["description"], "lee_s_description":novel["lee_s_description"]}} for novel in novels]

            output_serializer = NovelInfoSerializer(data = novels, many=True, fields=("translated_title", "meta_info"))
            if output_serializer.is_valid():
                return Response(output_serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class NovelDetailApiView(APIView):
    permission_classes = [permissions.AllowAny]

    @swagger_auto_schema(request_body=NovelInfoSerializer(fields=("book_key",)))
    def post(self, request, *args, **kwargs):
        '''
        Gets all details of a specific novel
        '''
        serializer = NovelInfoSerializer(data = request.data, fields=("book_key",))
        if serializer.is_valid(raise_exception=True):
            data = serializer.data
            book_key = data["book_key"]
            novel_info = TblNovelInfo.objects.get(book_key=book_key)
            output_serializer = NovelInfoSerializer(instance=novel_info)
            return Response(output_serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        