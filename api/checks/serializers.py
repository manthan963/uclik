from .models import Checks
from rest_framework import serializers

class CheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Checks
        fields = '__all__'

