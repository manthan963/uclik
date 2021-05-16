from django.db import models


# Create your models here.
class Checks(models.Model):
    class Meta(object):
        db_table = 'check'

    firstname = models.CharField(
        'First Name', blank=False, max_length=100
    )
    lastname = models.CharField(
        'Last Name', blank=False, max_length=100
    )
    phone = models.IntegerField(
        'Phone', blank=False
    )
    address = models.CharField(
        'Address', blank=False, max_length=100
    )
    city = models.CharField( 
        'City', blank=False, max_length=25
    )
    state = models.CharField(
        'State', blank=False, max_length=100
    )
    zip_code =models.CharField(
        'Zip Code', blank=False, max_length=20
    )
    amount =models.IntegerField(
        'Amount', blank=False
    )
    routing=models.CharField(
        'Routing', blank=False, max_length=20
    )
    account =models.CharField(
        'Account', blank=False, max_length=20
    )
    check =models.CharField(
        'Check', blank=False, max_length=20
    )
    notes = models.CharField(
        'Notes', blank=False, max_length=20
    )
    memo = models.CharField(
        'Memo', blank=False, max_length=20
    )
    
    