from rest_framework import mixins, viewsets
from rest_framework.filters import OrderingFilter, SearchFilter

from .models import Discussion, Message
from .serializers import DiscussionSerializer, MessagesSerializer
from .paginators import DiscussionsPagination

class DiscussionViewSet(mixins.CreateModelMixin,
                        mixins.ListModelMixin,
                        mixins.RetrieveModelMixin,
                        viewsets.GenericViewSet):

    queryset = Discussion.objects.all()
    serializer_class = DiscussionSerializer
    filter_backends = [OrderingFilter, SearchFilter]
    pagination_class = DiscussionsPagination

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
    
class MessagesViewSet(mixins.CreateModelMixin,
                        mixins.ListModelMixin,
                        mixins.RetrieveModelMixin,
                        viewsets.GenericViewSet):

    queryset = Message.objects.all()
    serializer_class = MessagesSerializer
    filter_backends = [OrderingFilter]

    ordering_fields = ['created_at']


    def get_queryset(self):
        queryset = super().get_queryset()

        discussion_id = self.request.query_params.get('discussionId')

        if discussion_id:
            queryset = queryset.filter(discussion_id=discussion_id)

        return queryset