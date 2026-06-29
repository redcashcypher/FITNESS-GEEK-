from django.db import models
from django.contrib.auth.models import AbstractUser

# 1. THE USER MODEL (Handles Authentication & Signup Data)
class CustomUser(AbstractUser):
    VECTOR_CHOICES = [
        ('aesthetics', 'Stage Aesthetics (Elite Modeling)'),
        ('longevity', 'Kinetic Mobility (Longevity)'),
        ('powerlifting', 'Force Production (Powerlifting)'),
        ('metabolic', 'Metabolic Optimization'),
    ]
    target_vector = models.CharField(max_length=20, choices=VECTOR_CHOICES, default='longevity')

    def __str__(self):
        return self.username

# 2. THE EXERCISE MODEL (Replaces your hardcoded frontend array)
class Exercise(models.Model):
    uid = models.CharField(max_length=50, unique=True, help_text="e.g., bench-press")
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    equipment = models.CharField(max_length=100)
    difficulty = models.CharField(max_length=50)
    sets = models.CharField(max_length=50)
    muscles = models.CharField(max_length=100)
    secondary = models.CharField(max_length=100)
    description = models.TextField()
    image_url = models.URLField(max_length=500)
    image_alt = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} [{self.category}]"

# 3. THE FEEDBACK MODEL (Catches data from your floating UI portal)
class FeedbackLog(models.Model):
    email = models.EmailField()
    comment = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Feedback from {self.email}"