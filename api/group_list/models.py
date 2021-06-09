from django.db import models


class Group(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=100)

    class Meta:
        db_table = 'group'
        ordering = ['name']
