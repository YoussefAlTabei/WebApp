from django.shortcuts import render,redirect
from django.contrib.auth import authenticate,login , logout
from django.contrib import messages
# Create your views here.

def login_user(request):
    if request.method == 'POST':
        username = request.POST['username']
        password =  request.POST['password']
        user = authenticate(request,username=username,password=password)
        if user is not None:
            login(request,user)
            return redirect("/homepage")
        else:
            messages.success(request,"Error logging in")
            return redirect('login')
    else:
        return render(request,'authenticate/login.html',{})
from django.contrib.auth.forms import UserCreationForm

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')  # Redirect to login page after signup
    else:
        form = UserCreationForm()
    return render(request, 'authenticate/signup.html', {'form': form})