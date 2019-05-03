from django.urls import path, include
from django_app.api import TodoViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/todos', TodoViewSet)

urlpatterns = [
    path('', include(router.urls))
]