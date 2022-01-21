from os import name
from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="schedule-home"),
    path(
        "select-department/<int:pk>/schedule",
        views.schedule_page,
        name="select-department-schedule",
    ),
    path(
        "select-department/<int:pk>/schedule/<int:day_pk>/",
        views.schedule_for_day,
        name="select-schedule-for-day",
    ),
    path(
        "select-department/<int:pk>/schedule/<int:day_pk>/add",
        views.add_schedule_for_day,
        name="add-schedule-for-day",
    ),
    path(
        "select-department/<int:pk>/schedule/<int:day_pk>/edit/<int:schedule_pk>/",
        views.edit_schedule_for_day,
        name="edit-schedule-for-day",
    ),
]
