"""
This will take our model with all the python related code and translate
the model into a JSON  response. This helps when we want ot get info about
a room from our database. We are able to retrieve a JSON response
"""

from rest_framework import serializers
from .models import *

class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ['url', 'title', 'author', 'thumbnail']


class PlaylistSerializer(serializers.ModelSerializer):

    songs = SongSerializer(many=True)
    class Meta:
        model = Playlist
        fields = ['id', 'name', 'songs', 'picture']
