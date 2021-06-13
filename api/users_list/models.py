from django.db import models

from group_list.models import Group


class Users(models.Model):
    username = models.CharField(max_length=100, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    group = models.ForeignKey(Group, on_delete = models.CASCADE, null=True)

    class Meta:
        db_table = 'users'
        ordering = ['created']

    @classmethod
    def users_in_group(cls, pk):
        if len(list(Users.objects.filter(group=pk))) >=1:
            return False
        return True
