from django.db import models

# Create your models here.

class Todo(models.Model):
    TODO = "TODO"
    IN_PROGRESS = "IN_PROGRESS"
    DONE = "DONE"
    State_Choices = (
        (TODO, "Todo"),
        (IN_PROGRESS, "In-progress"),
        (DONE, "Done"),
    )
    text = models.CharField(max_length=200)
    dueDate = models.DateField()
    state = models.CharField(max_length=20, choices=State_Choices, default=TODO)

