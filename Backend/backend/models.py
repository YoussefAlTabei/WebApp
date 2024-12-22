from django.db import models
from django.contrib.auth.models import User 

# Create your models here.
class Review(models.Model):
    movie_name = models.CharField(max_length=255)  # Field for the movie name
    rating = models.FloatField()  # Field for the movie rating
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Link to the User model
    comment = models.CharField(max_length=1275)
    def __str__(self):
        return f"{self.movie_name} - {self.rating} ({self.user.username})"