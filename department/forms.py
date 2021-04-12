from django import forms
from .models import Department,Employee

gender = (
        ('Male', 'M'),
        ('Female', 'F'),
        ('Other', 'O'),
        )

class DepartmentForm(forms.ModelForm): 
  
    # create meta class 
    class Meta: 
        model = Department 
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(DepartmentForm, self).__init__(*args, **kwargs)
        for key in self.fields:
            self.fields[key].required = True
            self.fields[key].widget.attrs['class'] = 'form-control'


class EmployeeForm(forms.ModelForm): 
    address = forms.CharField(required=False)
    gender = forms.ChoiceField(choices=gender)
    # create meta class 
    class Meta: 
        model = Employee
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super(EmployeeForm, self).__init__(*args, **kwargs)
        for key in self.fields:
            if not key=='address':
                self.fields[key].required = True
            self.fields[key].widget.attrs['class'] = 'form-control'
