from .serializers import CheckSerializer
from .models import Checks
from rest_framework import generics

# Create your views here.
class CheckReviewAdd(generic.CreateAPIView):
    queryset =Checks.objects.all()
    serializer_class = CheckSerializer