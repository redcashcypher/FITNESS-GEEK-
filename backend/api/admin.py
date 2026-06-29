from django.contrib import admin
from .models import CustomUser, Exercise, FeedbackLog

# Register your architecture so it appears in the master dashboard
admin.site.register(CustomUser)
admin.site.register(Exercise)
admin.site.register(FeedbackLog)