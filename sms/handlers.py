from django.views.decorators.http import require_http_methods


@require_http_methods(["GET", "POST"])
def hook_receiver_view(request):
    return HttpResponse("success")
