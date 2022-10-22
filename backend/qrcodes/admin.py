from django.contrib import admin

from .models import QRCodes


@admin.register(QRCodes)
class QRCodeAdmin(admin.ModelAdmin):
    list_display = (
        "owner", 
        "is_used",
    )