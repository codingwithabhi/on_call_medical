from schedule.models import Day, Schedule
from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required
from department.models import Department
from .forms import DateForm, ScheduleForm

# Create your views here.
@login_required(login_url="/account/login/")
def index(request):
    ctx = {
       "department_list":Department.objects.all()
    }
    return render(request, 'schedule/home.html',ctx)


@login_required(login_url="/account/login/")
def schedule_page(request,pk):
   department = Department.objects.get(pk=pk)
   form = DateForm(request.POST or None)
   if(form.is_valid()):
      form_data = form.cleaned_data
      date = form_data['select_date_for_scheduling']
      day,created=Day.objects.get_or_create(department=department,date=date)
      print(day,created)
      return redirect('select-schedule-for-day',pk,day.pk)
   ctx = {
      'form':DateForm
   }
   return render(request,"schedule/select_date_page.html",ctx)

@login_required(login_url="/account/login")
def schedule_for_day(request,pk,day_pk):
   day = Day.objects.get(pk=day_pk)
   ctx={
      "day": day,
      "department":day.department,
      "schedules":day.schedules.all(),
   }
   return render(request,"schedule/schedule_page.html",ctx)

def add_schedule_for_day(request,pk,day_pk):
   day = Day.objects.get(pk=day_pk)
   form = ScheduleForm(request.POST or None,day=day)
   if form.is_valid():
      instance = form.save(commit=False)
      instance.day = day
      instance.save()
      return redirect('select-schedule-for-day',pk,day.pk)
   ctx = {
      'form':form,
      'pk':pk,
      'day_pk':day_pk
   }
   return render(request,"schedule/schedule_form.html",ctx)



def edit_schedule_for_day(request,pk,day_pk,schedule_pk):
   day = Day.objects.get(pk=day_pk)
   schedule = Schedule.objects.get(pk=schedule_pk)
   form = ScheduleForm(request.POST or None,day=day,instance=schedule)
   if form.is_valid():
      form.save()
      return redirect('select-schedule-for-day',pk,day.pk)
   ctx = {
      'form':form,
      'pk':pk,
      'day_pk':day_pk,
      'schedule':schedule
   }
   return render(request,"schedule/schedule_form.html",ctx)
   