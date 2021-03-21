
from django.urls import path
from .import views

urlpatterns = [
    path('recieve/',views.recieve_sms,name='sms-receive'),
]