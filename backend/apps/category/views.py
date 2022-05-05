from django_filters.rest_framework import DjangoFilterBackend
from .models import Category
from .serializers import CategorySerializer
from rest_framework import generics,filters

# Create your views here.
class CategoryList(generics.ListAPIView):
 queryset=Category.objects.all()
 serializer_class=CategorySerializer
 filter_backends=[DjangoFilterBackend,filters.SearchFilter]
