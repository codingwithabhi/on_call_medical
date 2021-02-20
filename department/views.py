from django.shortcuts import render, redirect, get_object_or_404
from .models import Department,Employee
from .forms import DepartmentForm,EmployeeForm
from django.contrib import messages
from django.utils.translation import pgettext_lazy
from django.contrib.auth.decorators import login_required



# Create your views here.
@login_required(login_url="/account/login/")
def index(request):
    ctx = {
        "total_employee":Employee.objects.count(),
        "total_department":Department.objects.count(),
        "total_pr":4,
        "absent_today":3,
        
    }
    return render(request, 'home.html',ctx)

def department_list(request):
    ctx = {"department_list":Department.objects.all()}
    print(ctx)
    return render(request,'department_list.html',ctx)

def department_update(request, pk):
    department = get_object_or_404(Department, pk=pk)
    return _department_edit(request, department)

def department_create(request):
    department = Department()
    return _department_edit(request, department)

def _department_edit(request, department):
    form = DepartmentForm(request.POST or None, instance=department)
    if form.is_valid():
        form.save()
        msg = pgettext_lazy("Dashboard message", "Saved department")
        messages.success(request, msg)
        return redirect("department-details", pk=department.pk)
    ctx = {"department": department, "form": form}
    return render(request, "department_form.html", ctx)


def department_delete(request, pk):
    department = get_object_or_404(Department, pk=pk)
    department.delete()
    msg = pgettext_lazy("Dashboard message", "Removed department %s") % (department.name)
    messages.success(request, msg)
    return redirect("department-list")


def department_details(request, pk):
    department = get_object_or_404(Department, pk=pk)
    ctx = {"department": department}
    return render(request, "department_details.html", ctx)

def employee_list(request):
    ctx = {"employee_list":Employee.objects.all()}
    print(ctx)
    return render(request,'employee_list.html',ctx)

def employee_update(request, pk):
    employee = get_object_or_404(Employee, pk=pk)
    return _employee_edit(request, employee)

def employee_create(request):
    employee = Employee()
    return _employee_edit(request, employee)

def _employee_edit(request, employee):
    form = EmployeeForm(request.POST or None, instance=employee)
    if form.is_valid():
        form.save()
        msg = pgettext_lazy("Dashboard message", "Saved employee")
        messages.success(request, msg)
        return redirect("employee-details", pk=employee.pk)
    ctx = {"employee": employee, "form": form}
    return render(request, "employee_form.html", ctx)


def employee_delete(request, pk):
    employee = get_object_or_404(Employee, pk=pk)
    employee.delete()
    msg = pgettext_lazy("Dashboard message", "Removed employee %s") % (employee.name)
    messages.success(request, msg)
    return redirect("employee-list")


def employee_details(request, pk):
    employee = get_object_or_404(Employee, pk=pk)
    print(employee.full_name)
    ctx = {"employee": employee}
    return render(request, "employee_details.html", ctx)
