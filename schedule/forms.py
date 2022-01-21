from department.models import Employee
from schedule.models import Schedule
from django import forms
from bootstrap_datepicker_plus import DatePickerInput, TimePickerInput


class DateForm(forms.Form):
    select_date_for_scheduling = forms.DateField(widget=DatePickerInput())


class ScheduleForm(forms.ModelForm):
    start_time = forms.TimeField(widget=TimePickerInput())
    end_time = forms.TimeField(widget=TimePickerInput())
    employee = forms.ModelChoiceField(queryset=None)
    # create meta class
    class Meta:
        model = Schedule
        fields = ["start_time", "end_time", "employee"]

    def __init__(self, *args, **kwargs):
        self.day = kwargs.pop("day")
        super(ScheduleForm, self).__init__(*args, **kwargs)
        for key in self.fields:
            if key == "employee":
                self.fields[key].queryset = self.day.department.employees.all()
            self.fields[key].required = True
            self.fields[key].widget.attrs["class"] = "form-control"
