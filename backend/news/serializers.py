from rest_framework import serializers
from .models import Article, Comment, ArticleView

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class ArticleViewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleView
        fields = '__all__'