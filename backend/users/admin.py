from django.contrib import admin

from .models import User


@admin.register(User)
class UsersAdmin(admin.ModelAdmin):
    list_display = (
        "username",
        "is_generator",
    )