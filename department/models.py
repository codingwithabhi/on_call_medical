from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Department(models.Model):
    name = models.CharField(max_length=20)
    description = models.CharField(max_length=50)
    created = models.DateField(auto_now_add=True, null=True)

    def __str__(self) -> str:
        return self.name


class Employee(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    phone_number = PhoneNumberField()
    email = models.EmailField(max_length=100)
    role = models.CharField(max_length=20)
    department = models.ForeignKey(
        Department, related_name="employees", on_delete=models.CASCADE
    )
    gender = models.CharField(max_length=20)
    address = models.CharField(max_length=100)
    photo = models.ImageField(upload_to="images/", blank=True)

    def __str__(self) -> str:
        return self.first_name

    @property
    def full_name(self):
        return self.first_name + " " + self.last_name
