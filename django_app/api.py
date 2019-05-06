from django_app.models import Todo
from django_app.serializers import TodoSerializer
from rest_framework import viewsets
from django_filters import rest_framework as filters

# Create TodoFilter for ViewSet
class TodoFilter(filters.FilterSet):
    class Meta:
        model = Todo
        fields = {
            'status' : ['icontains'],
            'dueDate' : ['iexact', 'lte', 'gte']
        }

# Create ViewSets for Todo model
class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    filterset_class = TodoFilter
    ordering = ('dueDate',)
