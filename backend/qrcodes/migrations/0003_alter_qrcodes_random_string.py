# Generated by Django 4.1.2 on 2022-10-22 03:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('qrcodes', '0002_qrcodes_random_string'),
    ]

    operations = [
        migrations.AlterField(
            model_name='qrcodes',
            name='random_string',
            field=models.CharField(default='Xu1xvugSazjDwN34G8u4zFX9maE5DrR3HNvcmqR9UD4ckGn0BM', max_length=50),
        ),
    ]