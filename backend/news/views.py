from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework import mixins, viewsets

from .models import Article, Comment, ArticleView
from .serializers import NewsSerializer, CommentsSerializer, ArticleViewsSerializer
from .paginators import NewsPagination

class NewsViewSet(ReadOnlyModelViewSet):
    queryset = Article.objects.all()
    serializer_class = NewsSerializer
    filter_backends = [OrderingFilter, SearchFilter]

    ordering_fields = ['title', 'date']
    search_fields = ['title']
    pagination_class = NewsPagination


class CommentsViewSet(mixins.CreateModelMixin,
                        mixins.ListModelMixin,
                        mixins.RetrieveModelMixin,
                        viewsets.GenericViewSet):

    queryset = Comment.objects.all()
    serializer_class = CommentsSerializer
    filter_backends = [OrderingFilter]

    ordering_fields = ['created_at']


    def get_queryset(self):
        queryset = super().get_queryset()

        article_id = self.request.query_params.get('articleId')

        if article_id:
            queryset = queryset.filter(article_id=article_id)

        return queryset
    

class ArticleViewViewSet(mixins.CreateModelMixin,
                        mixins.ListModelMixin,
                        mixins.RetrieveModelMixin,
                        viewsets.GenericViewSet):

    queryset = ArticleView.objects.all()
    serializer_class = ArticleViewsSerializer
    filter_backends = [OrderingFilter]

    ordering_fields = ['created_at']


    def get_queryset(self):
        queryset = super().get_queryset()

        article_id = self.request.query_params.get('articleId')
        user_id = self.request.query_params.get('userId')

        if article_id:
            queryset = queryset.filter(article_id=article_id)
        if user_id:
            queryset = queryset.filter(user_id=user_id)

        return queryset