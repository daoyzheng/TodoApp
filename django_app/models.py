from django.db import models
from datetime import datetime, timedelta

# Create your models here.
class State(models.Model):
    status = models.CharField(max_length=20)

    def __str__(self):
        return self.status

class Todo(models.Model):
    text = models.CharField(max_length=200)
    dueDate = models.DateTimeField(default=datetime.now()+timedelta(days=7))
    state = models.ForeignKey(State, on_delete=models.CASCADE)

