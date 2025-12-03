from rest_framework import mixins, viewsets
from rest_framework.filters import OrderingFilter, SearchFilter

from .models import Review
from .serializers import ReviewSerializer
from .paginators import ReviewsPagination

class ReviewViewSet(mixins.CreateModelMixin,
                        mixins.ListModelMixin,
                        mixins.RetrieveModelMixin,
                        viewsets.GenericViewSet):

    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    filter_backends = [OrderingFilter, SearchFilter]
    pagination_class = ReviewsPagination

    ordering_fields = ['created_at']
    search_fields = ['title']

    def get_queryset(self):
        queryset = super().get_queryset()

        film_id = self.request.query_params.get('filmId')
        user_id = self.request.query_params.get('userId')

        if film_id:
            queryset = queryset.filter(film_id=film_id)
        if user_id:
            queryset = queryset.filter(user_id=user_id)

        return queryset