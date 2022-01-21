from django.urls import path
from . import views

urlpatterns = [
    path("login/", views.login_user, name="login"),
    path("signup/", views.signup_user, name="signup"),
    path("user-details/", views.user_details, name="user-details"),
    path("forgot-password/", views.forgot_password, name="forgot-password"),
    path("logout/", views.logout_user, name="logout"),
]
