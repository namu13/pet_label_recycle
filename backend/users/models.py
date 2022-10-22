from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    name = models.CharField(
        max_length=250,
        default="",
    )
    is_generator = models.BooleanField(default=False)