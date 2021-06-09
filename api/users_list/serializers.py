from rest_framework import serializers
from rest_framework.relations import PrimaryKeyRelatedField

from group_list.models import Group
from users_list.models import Users


class UsersSerializer(serializers.ModelSerializer):
    group = PrimaryKeyRelatedField(allow_empty=True, many=True, queryset=Group.objects.all())

    class Meta:
        model = Users
        fields = ['id', 'username', 'created', 'group']
