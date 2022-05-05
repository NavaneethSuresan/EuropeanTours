from django_filters.rest_framework import DjangoFilterBackend
from .models import Place
from .serializers import PlaceSerializer
from rest_framework import generics, filters
from rest_framework.response import Response

# Create your views here.


class PlaceList(generics.ListAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
