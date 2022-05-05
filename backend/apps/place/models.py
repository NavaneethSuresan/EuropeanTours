from tkinter import CASCADE
from django.db import models
from cloudinary.models import CloudinaryField
from apps.category.models import Category

# Create your models here.


class Place(models.Model):
    MY_CONSTANTS = (
        ('full day tours', 'Full day tours'),
        ('day trips', 'Day Trips'),
        ('private and luxury', 'Private & Luxury')
    )

    class Meta(object):
        db_table = 'place'

    name = models.CharField(
       'Name', null=False, max_length=50)
    description = models.CharField(
       'Description', null=False, max_length=500)
    image = CloudinaryField(
       'Image', null=False, blank=False)
    category = models.ForeignKey(
        Category, default=None, on_delete=models.CASCADE)
    map = models.URLField(max_length=200, default=None)
    time_to_travel = models.IntegerField(
        'Travel Duration', blank=False, default=None)
    place_type = models.CharField(
        'Place_type', max_length=200, choices=MY_CONSTANTS)
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )

    def __str__(self):
        return self.name
