from django.conf import settings
from django.db import models
from django.utils.crypto import get_random_string


class QRCodes(models.Model):
    owner=models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="qrcodes"
    )

    is_used=models.BooleanField(default=False)

    random_string = models.CharField(
        max_length=settings.RANDOM_STRING_LENGTH, 
        default=get_random_string(length=settings.RANDOM_STRING_LENGTH),
    )

    def __str__(self):
        return "QR Codes"