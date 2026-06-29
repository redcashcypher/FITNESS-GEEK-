from django.urls import path
from .views import ExerciseList, FeedbackCreate, UserCreate

urlpatterns = [
    path('exercises/', ExerciseList.as_view(), name='exercise-list'),
    path('feedback/', FeedbackCreate.as_view(), name='feedback-create'),
    path('signup/', UserCreate.as_view(), name='user-create'),
]