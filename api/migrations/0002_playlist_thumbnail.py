# Generated by Django 5.0 on 2024-01-22 21:24

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="playlist",
            name="thumbnail",
            field=models.TextField(default="Unknown"),
        ),
    ]
