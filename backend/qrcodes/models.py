from django.db import models


class QRCodes(models.Model):
    owner=models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="qrcodes"
    )

    is_used=models.BooleanField(default=False)

    def __str__(self):
        return "QR Codes"