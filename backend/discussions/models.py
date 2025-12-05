from django.db import models
from authorization.models import User
from films.models import Film

# Create your models here.

class Discussion(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="discussions")
    film = models.ForeignKey(Film, on_delete=models.CASCADE, related_name="discussions")
    title = models.CharField(max_length=200)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Message(models.Model):

    discussion = models.ForeignKey(Discussion, on_delete=models.CASCADE, related_name='messages')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='messages')
    text = models.TextField()
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.user

    
