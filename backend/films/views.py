from rest_framework import viewsets, mixins
from .models import Film, Watchlist, Favourite
from .serializers import FilmSerializer, WatchlistSerializer, FavouriteSerializer
from rest_framework.filters import OrderingFilter, SearchFilter
from .paginators import FilmPagination

class FilmViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer
    filter_backends = [OrderingFilter, SearchFilter]
    ordering_fields = ['title', 'published', 'rating', 'length', 'rating']
    search_fields = ['title']
    pagination_class = FilmPagination

class WatchlistViewSet(mixins.CreateModelMixin,
                        mixins.ListModelMixin,
                        mixins.RetrieveModelMixin,
                        mixins.DestroyModelMixin,
                        viewsets.GenericViewSet):

    queryset = Watchlist.objects.all()
    serializer_class = WatchlistSerializer
    filter_backends = [OrderingFilter]

    ordering_fields = ['created_at']
    pagination_class = FilmPagination


    def get_queryset(self):
        queryset = super().get_queryset()

        user_id = self.request.query_params.get('userId')
        film_id = self.request.query_params.get('filmId')

        if user_id:
            queryset = queryset.filter(user_id=user_id)
        if film_id:
            queryset = queryset.filter(film_id=film_id)

        return queryset
    
class FavouriteViewSet(mixins.CreateModelMixin,
                        mixins.ListModelMixin,
                        mixins.RetrieveModelMixin,
                        mixins.DestroyModelMixin,
                        viewsets.GenericViewSet):

    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer
    filter_backends = [OrderingFilter]

    ordering_fields = ['created_at']


    def get_queryset(self):
        queryset = super().get_queryset()

        user_id = self.request.query_params.get('userId')
        film_id = self.request.query_params.get('filmId')

        if user_id:
            queryset = queryset.filter(user_id=user_id)
        if film_id:
            queryset = queryset.filter(film_id=film_id)

        return queryset