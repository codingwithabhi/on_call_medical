from department.models import Employee, Department
from django.db import models


class Day(models.Model):
    date = models.DateField()
    department = models.ForeignKey(
        Department, related_name="scheduled_days", on_delete=models.CASCADE
    )


class Schedule(models.Model):
    start_time = models.TimeField()
    end_time = models.TimeField()
    employee = models.ForeignKey(
        Employee, related_name="schedules", on_delete=models.CASCADE
    )
    day = models.ForeignKey(
        Day,
        related_name="schedules",
        on_delete=models.CASCADE,
    )
