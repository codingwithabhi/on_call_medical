import datetime
from django.core.exceptions import ObjectDoesNotExist
from django_twilio.decorators import twilio_view
from twilio.twiml.messaging_response import MessagingResponse
from .decorators import validate_twilio_request
from department.models import Employee
from .models import SmsAppointmentModel

@twilio_view
#@validate_twilio_request
def recieve_sms(request):
    r = MessagingResponse()
    try:
        employee_phone = request.POST['From']
        employee = Employee.objects.get(phone_number=employee_phone)
        received_message = request.POST['Body']
        SmsAppointment, created = SmsAppointmentModel.objects.get_or_create(
            employee=employee
        )
        print(SmsAppointment.step)
        #print(employee,received_message,request.POST)
        if received_message.lower().replace(" ", "") in ['hi','hello','hii']:
            r.message('Hello Test, \nType Reason For Appointment Cancel. for e.g. type Reason-Im not feeling well.')
        elif received_message.lower().replace(" ", "").find('reason-') != -1:
            if SmsAppointment.step == 0:
                reason = received_message.split('-')[1]
                SmsAppointment.reason = reason
                SmsAppointment.step = 1
                SmsAppointment.save()
                r.message('Type date you are calling out as Date-yyyy/mm/dd')
            else:
                r.message('Please Follow the steps properly.')
        elif received_message.lower().replace(" ", "").find('date-') != -1:
            if SmsAppointment.step == 1:
                date = received_message.lower().replace(" ", "").split('-')[1].split('/')
                SmsAppointment.date_chosen = datetime.date(year=int(date[0]),month=int(date[1]),day=int(date[2]))
                SmsAppointment.step = 2
                SmsAppointment.save()
                r.message('Type start time of schedule are calling out as Time-HH:MM')
            else:
                r.message('Please Follow the steps properly.')
        elif received_message.lower().replace(" ", "").find('time-') != -1:
            if SmsAppointment.step == 2:
                time = received_message.lower().replace(" ", "").split('-')[1].split(':')
                SmsAppointment.time_chosen = datetime.time(hour=int(time[0]),second=int(time[1]))
                SmsAppointment.step = 3
                SmsAppointment.save()
                r.message('Type yes for confirming all detail or type cancel ')
            else:
                r.message('Please Follow the steps properly.')
        elif received_message.lower().replace(" ", "").find('yes') != -1:
            if SmsAppointment.step == 3:

                r.message('you have successfully cancelled appointment')
        elif received_message.lower().replace(" ", "").find('cancel') != -1:
            r.message('')
        else:
            r.message('success')
    except ObjectDoesNotExist:
        r.message('Your Number is not registered with any account please message from registered number')
    return r