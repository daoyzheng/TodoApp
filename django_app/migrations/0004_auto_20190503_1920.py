# Generated by Django 2.2.1 on 2019-05-03 19:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_app', '0003_auto_20190503_1913'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='dueDate',
            field=models.DateField(),
        ),
    ]
