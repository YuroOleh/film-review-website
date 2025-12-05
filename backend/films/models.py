from django.db import models
from authorization.models import User

# Create your models here.
class Film(models.Model):

    title = models.CharField(max_length=30)
    description = models.TextField()
    length = models.IntegerField()
    published = models.DateField()
    rating = models.FloatField()
    poster = models.ImageField(upload_to='posters/')

    def __str__(self):
        return self.title
    
class Watchlist(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="watchlist")
    film = models.ForeignKey(Film, on_delete=models.CASCADE, related_name="watchlist")
    created_at = models.DateField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'film') 

    def __str__(self):
        return self.user
    
class Favourite(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="favourite")
    film = models.ForeignKey(Film, on_delete=models.CASCADE, related_name="favourite")
    created_at = models.DateField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'film') 

    def __str__(self):
        return self.user