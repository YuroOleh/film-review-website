from django.db import models
from authorization.models import User

# Create your models here.
class Article(models.Model):

    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    text = models.TextField()
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
    

class Comment(models.Model):

    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')
    text = models.TextField()
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.user
    
class ArticleView(models.Model):

    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='views')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='views')
    created_at = models.DateField(auto_now_add=True)

    class Meta:
        unique_together = ["article", "user"]

    def __str__(self):
        return self.user


    
    