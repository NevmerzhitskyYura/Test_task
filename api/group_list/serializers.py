from rest_framework import serializers

from group_list.models import Group
from users_list.models import Users


class GroupSerializer(serializers.ModelSerializer):
    #users = serializers.SlugRelatedField (allow_empty=True, many=True, slug_field='username', queryset=Users.objects.all())

    class Meta:
        model = Group
        fields = ['id', 'name', 'description']
