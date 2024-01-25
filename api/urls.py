from django.urls import path
from .views import *

urlpatterns = [
    path('', main),
    path('get-songs', GetSongs.as_view()),
    path('get-playlists', GetPlaylists.as_view())
]
