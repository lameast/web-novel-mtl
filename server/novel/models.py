# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class TblNovelInfo(models.Model):
    book_key = models.IntegerField(db_column='Book_Key', primary_key=True)  # Field name made lowercase.
    translated_title = models.CharField(db_column='Translated_Title', max_length=128, blank=True, null=True)  # Field name made lowercase.
    raw_title = models.CharField(db_column='Raw_Title', max_length=128, blank=True, null=True)  # Field name made lowercase.
    raw_site = models.CharField(db_column='Raw_Site', max_length=128, blank=True, null=True)  # Field name made lowercase.
    dictionaries = models.TextField(db_column='Dictionaries', blank=True, null=True)  # Field name made lowercase.
    updated = models.DateTimeField(db_column='Updated', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_novel_info'

class TblChapters(models.Model):
    book_key = models.ForeignKey(TblNovelInfo, db_column='Book_Key', null=True, on_delete=models.CASCADE, related_name="chapters")  # Field name made lowercase.
    chapter_number = models.IntegerField(primary_key=True, db_column='Chapter_Number')  # Field name made lowercase.
    raw_text = models.TextField(db_column='Raw_Text', blank=True, null=True)  # Field name made lowercase.
    translated_text = models.TextField(db_column='Translated_Text', blank=True, null=True)  # Field name made lowercase.
    bulk_translated_text = models.TextField(db_column='Bulk_Translated_Text', blank=True, null=True)  # Field name made lowercase.
    raw_letter_count = models.IntegerField(db_column='Raw_Letter_Count', blank=True, null=True)  # Field name made lowercase.
    updatedate = models.DateTimeField(db_column='UpdateDate', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_chapters'
        unique_together = (('book_key', 'chapter_number'),)


class TblLogsActions(models.Model):
    uploaddate = models.DateTimeField(db_column='UploadDate', primary_key=True)  # Field name made lowercase.
    actions = models.TextField(db_column='Actions', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_logs_actions'


class TblLogsDict(models.Model):
    book_key = models.ForeignKey(TblNovelInfo, db_column='Book_Key', null=True, on_delete=models.CASCADE)  # Field name made lowercase.
    last_run = models.TextField(db_column='Last_Run', blank=True, null=True)  # Field name made lowercase.
    second_last_run = models.TextField(db_column='Second_Last_Run', blank=True, null=True)  # Field name made lowercase.
    updated = models.DateTimeField(db_column='Updated', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_logs_dict'



class TblNovelMetaInfo(models.Model):
    book_key = models.ForeignKey(TblNovelInfo, db_column='Book_Key', null=True, on_delete=models.CASCADE, related_name="meta_info")  # Field name made lowercase.
    description = models.TextField(db_column='Description', blank=True)  # Field name made lowercase.
    lee_s_description = models.TextField(primary_key=True, db_column="Lee's Description", blank=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'tbl_novel_meta_info'


class TblNovelTags(models.Model):
    book_key = models.ForeignKey(TblNovelInfo, db_column='Book_Key', null=True, on_delete=models.CASCADE)  # Field name made lowercase.
    tags = models.TextField(db_column='Tags', blank=True, null=True)  # Field name made lowercase.
    updated = models.DateTimeField(db_column='Updated', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_novel_tags'


class TblTags(models.Model):
    tags_key = models.AutoField(db_column='Tags_Key', primary_key=True)  # Field name made lowercase.
    tags_name = models.CharField(db_column='Tags_Name', max_length=128)  # Field name made lowercase.
    tags_description = models.TextField(db_column='Tags_Description', blank=True, null=True)  # Field name made lowercase.
    genre_flag = models.IntegerField(db_column='Genre_Flag', blank=True, null=True)  # Field name made lowercase.
    meta_flag = models.IntegerField(db_column='Meta_Flag', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_tags'

class TblQlookupNovelTags(models.Model):
    book_key = models.ForeignKey(TblNovelInfo, db_column='Book_Key', null=True, on_delete=models.CASCADE)  # Field name made lowercase.
    tags_key = models.ForeignKey(TblTags, db_column='Tags_Key', max_length=45, on_delete=models.CASCADE)  # Field name made lowercase.
    insert_date = models.DateTimeField(db_column='Insert_Date', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_qlookup_novel_tags'
        unique_together = (('book_key', 'tags_key'),)