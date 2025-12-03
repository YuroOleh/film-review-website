from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FilmViewSet, WatchlistViewSet, FavouriteViewSet

router = DefaultRouter()
router.register(r'watchlist', WatchlistViewSet, basename='watchlist')
router.register(r'favourites', FavouriteViewSet, basename='favourites')
router.register(r'', FilmViewSet, basename='film')

urlpatterns = [
    path('', include(router.urls)),
]