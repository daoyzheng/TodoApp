from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django_app.models import Todo
from django_app.serializers import TodoSerializer
from rest_framework import viewsets

# Create your views here.
class TodoView(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def get_queryset(self):
        """
        Optionally restricts the returned todos,
        by filtering against a `state` query parameter in the URL.
        """
        queryset = Todo.objects.all()
        state = self.request.query_params.get('state', None)
        if state is not None:
            queryset = queryset.filter(state__exact=state)
        return queryset



