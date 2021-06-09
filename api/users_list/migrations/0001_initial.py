# Generated by Django 3.1.7 on 2021-06-09 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('group_list', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=100, unique=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('group', models.ManyToManyField(to='group_list.Group')),
            ],
            options={
                'db_table': 'users',
                'ordering': ['created'],
            },
        ),
    ]
