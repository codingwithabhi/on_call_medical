from django.db import models

from department.models import Employee

REASON_CHOICES = (
    ("1", "Schedule"),
    ("2", "Cancel"),
)

class SmsAppointmentModel(models.Model):
    employee = models.OneToOneField(to=Employee,on_delete=models.CASCADE,primary_key=True,related_name="smsappointmentmodel")
    step = models.IntegerField(default=0)
    date_chosen = models.DateField(null=True,blank=True)
    time_chosen = models.TimeField(null=True,blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    cancel_reason = models.CharField(max_length=512,null=True,blank=True)
    reason = models.CharField(max_length=20,choices=REASON_CHOICES,default='2')

class Message(models.Model):
    appointment_model = models.ForeignKey(to=SmsAppointmentModel,on_delete=models.CASCADE,related_name="messages")
    created_at = models.DateTimeField(auto_now_add=True)
    message = models.CharField(max_length=100)

class SmsAppointmentModelConfirm(models.Model):
    employee = models.ForeignKey(to=Employee,on_delete=models.CASCADE,related_name="confirmedsmsappointments")
    date_chosen = models.DateField(null=True,blank=True)
    time_chosen = models.TimeField(null=True,blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    cancel_reason = models.CharField(max_length=512,null=True,blank=True)
    reason = models.CharField(max_length=20,choices=REASON_CHOICES,default='2')
    