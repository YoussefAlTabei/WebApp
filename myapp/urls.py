from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Root of /homepage/ points to home view
    path('todos/', views.todos, name='Todos'),  # /homepage/todos/ points to todos view
]

