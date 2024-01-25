from django.db import models

class Song(models.Model):
    url = models.TextField(default="Unknown")
    title = models.TextField(default="Unknown")
    author = models.TextField(default="Unknown")
    thumbnail = models.TextField(default="Unknown")
    
class Playlist(models.Model):
    name = models.CharField(max_length=200)
    songs = models.ManyToManyField(Song)
    picture = models.TextField(default="Unknown")