# Generated by Django 2.2 on 2021-05-15 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checks', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='checks',
            name='amount',
            field=models.IntegerField(verbose_name='Amount'),
        ),
        migrations.AlterField(
            model_name='checks',
            name='phone',
            field=models.IntegerField(verbose_name='Phone'),
        ),
        migrations.AlterField(
            model_name='checks',
            name='zip_code',
            field=models.CharField(max_length=20, verbose_name='Zip Code'),
        ),
    ]
