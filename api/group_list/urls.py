from django.urls import path

from . import views

urlpatterns = [
    path('', views.group_list),
    path('<int:pk>', views.group_detail)
]
