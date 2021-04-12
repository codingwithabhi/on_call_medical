
from django.urls import path
from .import views

urlpatterns = [
    path('index/',views.index,name='index'),
    path('department-list/',views.department_list,name='department-list'),
    path('department-create/',views.department_create,name='department-create'),
    path('department/<int:pk>/',views.department_details,name='department-details'),
    path('department-update/<int:pk>/',views.department_update,name='department-update'),
    path('department-delete/<int:pk>/',views.department_delete,name='department-delete'),
    
    path('employee-list/',views.employee_list,name='employee-list'),
    path('employee-create/',views.employee_create,name='employee-create'),
    path('employee/<int:pk>/',views.employee_details,name='employee-details'),
    path('employee-update/<int:pk>/',views.employee_update,name='employee-update'),
    path('employee-delete/<int:pk>/',views.employee_delete,name='employee-delete'),

    path('staff-list/',views.staff_list,name='staff-list'),
]
