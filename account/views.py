from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, render

from django.contrib.auth.decorators import login_required
from .forms import LoginForm, SignUpForm

# Create your views here.


@login_required(login_url="/account/login/")
def signup_user(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("staff-list")
    else:
        form = SignUpForm()
    return render(request, "signup.html", {"form": form})


def login_user(request):
    form = LoginForm(data=request.POST or None)
    if form.is_valid():
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, f" welcome {username} !!")
            return redirect("index")
        else:
            messages.info(request, f"account does not exit plz sign in")
    ctx = {"form": form}
    return render(request, "login.html", ctx)


@login_required(login_url="/account/login/")
def user_details(request):
    return render(request, "department_list.html")


def forgot_password(request):
    return redirect("login")


def logout_user(request):
    logout(request)
    return redirect("login")
