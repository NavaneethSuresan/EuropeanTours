from operator import mod
from django.db import models
from cloudinary.models import CloudinaryField

# Create your models here.
class Category(models.Model):
 class Meta(object):
  db_table='category'
 name=models.CharField('Name',blank=False,max_length=100)
 image=CloudinaryField('Image',blank=False)

 def __str__(self):
  return self.name

