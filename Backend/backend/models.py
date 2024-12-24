from django.db import models
from django.contrib.auth.models import User 
#
# Create your models here.
class Review(models.Model):
    movie_name = models.CharField(max_length=255)  # Field for the movie name
    rating = models.FloatField()  # Field for the movie rating
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Link to the User model
    comment = models.CharField(max_length=1275)
    def __str__(self):
        return f"{self.movie_name} - {self.rating} ({self.user.username})"
class Watchlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="watchlist")
    movie_name = models.CharField(max_length=255)

    class Meta:
        unique_together = ('user', 'movie_name')  # Ensures each user can add a movie only once to their watchlist

    def __str__(self):
        return f"{self.user.username} - {self.movie_name}"


class Favorites(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="favorites")
    movie_name = models.CharField(max_length=255)

    class Meta:
        unique_together = ('user', 'movie_name')  # Ensures each user can add a movie only once to their favorites

    def __str__(self):
        return f"{self.user.username} - {self.movie_name}"