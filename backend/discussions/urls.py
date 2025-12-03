from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DiscussionViewSet, MessagesViewSet

router = DefaultRouter()
router.register(r'messages', MessagesViewSet)
router.register(r'', DiscussionViewSet, basename='discussion')

urlpatterns = [
    path('', include(router.urls)),
]