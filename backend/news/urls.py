from django.urls import path, include
from rest_framework.routers import DefaultRouter
from news.views import NewsViewSet, CommentsViewSet, ArticleViewViewSet

router = DefaultRouter()
router.register(r'comments', CommentsViewSet)
router.register(r'views', ArticleViewViewSet)
router.register(r'', NewsViewSet)

urlpatterns = [
    path('', include(router.urls))
]