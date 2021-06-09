from django.urls import path, include

urlpatterns = [
    path('users/', include('users_list.urls')),
    path('groups/', include('group_list.urls'))
]
