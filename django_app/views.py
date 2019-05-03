from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django_app.models import Todo
from django_app.serializers import TodoSerializer
from rest_framework import viewsets
from django_filters import rest_framework as filters

# Create your views here.
class TodoFilter(filters.FilterSet):
    class Meta:
        model = Todo
        fields = {
            'state' : ['icontains'],
            'dueDate' : ['iexact', 'lte', 'gte']
        }

class TodoView(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    filterset_class = TodoFilter




