# Generated by Django 2.2 on 2021-05-15 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Checks',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=100, verbose_name='First Name')),
                ('lastname', models.CharField(max_length=100, verbose_name='Last Name')),
                ('phone', models.IntegerField(max_length=12, verbose_name='Phone')),
                ('address', models.CharField(max_length=100, verbose_name='Address')),
                ('city', models.CharField(max_length=25, verbose_name='City')),
                ('state', models.CharField(max_length=100, verbose_name='State')),
                ('zip_code', models.IntegerField(max_length=20, verbose_name='Zip Code')),
                ('amount', models.IntegerField(max_length=20, verbose_name='Amount')),
                ('routing', models.CharField(max_length=20, verbose_name='Routing')),
                ('account', models.CharField(max_length=20, verbose_name='Account')),
                ('check', models.CharField(max_length=20, verbose_name='Check')),
                ('notes', models.CharField(max_length=20, verbose_name='Notes')),
                ('memo', models.CharField(max_length=20, verbose_name='Memo')),
            ],
            options={
                'db_table': 'check',
            },
        ),
    ]
