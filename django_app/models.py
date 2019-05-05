from django.db import models

# Create your models here.

class Todo(models.Model):
    TODO = "TODO"
    IN_PROGRESS = "IN-PROGRESS"
    DONE = "DONE"
    Status_Choices = (
        (TODO, "Todo"),
        (IN_PROGRESS, "In-progress"),
        (DONE, "Done"),
    )
    text = models.CharField(max_length=200)
    dueDate = models.DateField()
    status = models.CharField(max_length=20, choices=Status_Choices, default=TODO)

