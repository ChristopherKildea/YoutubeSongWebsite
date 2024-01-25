from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializers import *


# Create your views here.
def main(request):
    return HttpResponse("Hello")


class GetSongs(APIView):
    def get(self, request):
        output = [{"url": output.url, 
                   "title": output.title, 
                   "author": output.author, 
                   "thumbnail": output.thumbnail}
                   for output in Song.objects.all()]
        return Response(output)


class GetPlaylists(APIView):
    def get(self, request):
            playlists = Playlist.objects.all()
            serializer = PlaylistSerializer(playlists, many=True)  # Use the serializer
            return Response(serializer.data)
