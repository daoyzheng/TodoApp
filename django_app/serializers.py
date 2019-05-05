from rest_framework import serializers
from django_app.models import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'text', 'dueDate', 'status')


