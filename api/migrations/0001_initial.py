# Generated by Django 5.0 on 2024-01-22 15:39

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Song",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("url", models.TextField(default="Unknown")),
                ("title", models.TextField(default="Unknown")),
                ("author", models.TextField(default="Unknown")),
                ("thumbnail", models.TextField(default="Unknown")),
            ],
        ),
        migrations.CreateModel(
            name="Playlist",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200)),
                ("songs", models.ManyToManyField(to="api.song")),
            ],
        ),
    ]
