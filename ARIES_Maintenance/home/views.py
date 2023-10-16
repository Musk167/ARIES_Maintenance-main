from django.shortcuts import render, HttpResponse, redirect



def index(request):
    return render(request, "index.html")

def compressor_view(request):
    return render(request, "compressor.html")


# def login_view(request):
#     # Add your login logic here if needed
#    return render(request, 'login.html')

def contact_view(request):
    return render(request, 'contact.html')

def part1_view(request):
    return render(request, "part1.html")

def part2_view(request):
    return render(request, "part2.html")

def part3_view(request):
    return render(request, "part3.html")

def part4_view(request):
    return render(request, "part4.html")

def part5_view(request):
    return render(request, "part5.html")

def chiller_view(request):
    return render(request, "chiller.html")

def hydraulicpump_view(request):
    return render(request, "hydraulicpump.html")

def notification_view(request):
    return render(request, "notification.html")

    
def sensordata_view(request):
    return render(request, "sensordata.html")



def part6_view(request):
    return render(request, "part6.html")

def part7_view(request):
    return render(request, "part7.html")

def part8_view(request):
    return render(request, "part8.html")

def part9_view(request):
    return render(request, "part9.html")

def part10_view(request):
    return render(request, "part10.html")

def cpart1_view(request):
    return render(request, "cpart1.html")
def cpart2_view(request):
    return render(request, "cpart2.html")
def cpart3_view(request):
    return render(request, "cpart3.html")
def cpart4_view(request):
    return render(request, "cpart4.html")
def cpart5_view(request):
    return render(request, "cpart5.html")
def cpart6_view(request):
    return render(request, "cpart6.html")
def cpart7_view(request):
    return render(request, "cpart7.html")
def cpart8_view(request):
    return render(request, "cpart8.html")
def cpart9_view(request):
    return render(request, "cpart9.html")
def cpart10_view(request):
    return render(request, "cpart10.html")
def hpart1_view(request):
    return render(request, "hpart1.html")
def hpart2_view(request):
    return render(request, "hpart2.html")
def hpart3_view(request):
    return render(request, "hpart3.html")
def hpart4_view(request):
    return render(request, "hpart4.html")
def hpart5_view(request):
    return render(request, "hpart5.html")
def hpart6_view(request):
    return render(request, "hpart6.html")
def hpart7_view(request):
    return render(request, "hpart7.html")
def hpart8_view(request):
    return render(request, "hpart8.html")
def hpart9_view(request):
    return render(request, "hpart9.html")
def hpart10_view(request):
    return render(request, "hpart10.html")    


from django.contrib.auth import authenticate, login

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # Redirect to the 'index' page after successful login
            print(f"User '{username}' has logged in.")  # Print the message to the console
            return redirect('index')
        else:
            # Handle invalid login
            print(f"Login attempt failed for user '{username}'.")  # Print the message to the console
            return render(request, 'login.html', {'error_message': 'Invalid username or password', 'username': f'{username}'})
    else:
        return render(request, 'login.html')