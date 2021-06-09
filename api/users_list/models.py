from django.db import models

from group_list.models import Group


class Users(models.Model):
    username = models.CharField(max_length=100, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    group = models.ManyToManyField(Group)

    class Meta:
        db_table = 'users'
        ordering = ['created']
