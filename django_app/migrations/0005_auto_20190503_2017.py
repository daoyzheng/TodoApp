# Generated by Django 2.2.1 on 2019-05-03 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_app', '0004_auto_20190503_1920'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='state',
            field=models.CharField(choices=[('TODO', 'Todo'), ('IN_PROGRESS', 'In-progress'), ('DONE', 'Done')], default='TODO', max_length=20),
        ),
        migrations.DeleteModel(
            name='State',
        ),
    ]