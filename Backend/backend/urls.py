from django.urls import path
from .views import submit_review
from .views import submit_review,add_to_watchlist, add_to_favorites


urlpatterns = [
    path('submit-review/', submit_review, name='submit_review'),
    path('add-to-watchlist/', add_to_watchlist, name='add_to_watchlist'),
    path('add-to-favorites/', add_to_favorites, name='add_to_favorites'),
   
]
