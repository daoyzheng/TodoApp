from rest_framework import serializers
from django_app.models import Todo, State

class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'url', 'text', 'dueDate', 'state')

class StateSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = State
        fields = ('id', 'url', 'status')

