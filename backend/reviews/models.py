from django.db import models
from authorization.models import User
from films.models import Film

# Create your models here.
class Review(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="reviews")
    film = models.ForeignKey(Film, on_delete=models.CASCADE, related_name="reviews")
    text = models.TextField()
    rating = models.FloatField()
    created_at = models.DateField(auto_now_add=True)

    

    def __str__(self):
        return self.user