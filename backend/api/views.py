from rest_framework import generics, permissions
from .models import Exercise, FeedbackLog
from .serializers import UserSerializer, ExerciseSerializer, FeedbackSerializer

class ExerciseList(generics.ListAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer
    permission_classes = [permissions.AllowAny]

class FeedbackCreate(generics.CreateAPIView):
    queryset = FeedbackLog.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = [permissions.AllowAny]

class UserCreate(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]