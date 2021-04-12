from django_twilio.decorators import twilio_view
from twilio.twiml.messaging_response import MessagingResponse

@twilio_view
def recieve_sms(request):
    r = MessagingResponse()
    r.message('Hello from your Django app!')
    return r