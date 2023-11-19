from .dynamicserializer import DynamicFieldsModelSerializer
from .models import TblTags
from .models import TblNovelInfo
from .models import TblChapters
from .models import TblNovelMetaInfo

class TagsSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = TblTags
        fields = ["tags_key", "tags_name", "tags_description", "genre_flag", "meta_flag"]

class ChapterSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = TblChapters
        fields = ["book_key", "chapter_number", "raw_text", "translated_text", "bulk_translated_text", "raw_letter_count", "updatedate"]

class NovelMetaInfoSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = TblNovelMetaInfo
        fields = ["book_key", "description", "lee_s_description"]

class NovelInfoSerializer(DynamicFieldsModelSerializer):

    #tags = TagsSerializer(many = True)
    chapters = ChapterSerializer(many = True, fields=("book_key", "chapter_number", "translated_text"))
    meta_info = NovelMetaInfoSerializer(many = True)
    
    class Meta:
        model = TblNovelInfo
        fields = ["book_key", "translated_title", "raw_title", "raw_site", "dictionaries", "updated", "chapters", "meta_info"]
        extra_kwargs = {
            'book_key': {
                'validators': []
            }
        }
