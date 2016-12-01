from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return render(request, 'beenthere/index.html')


@csrf_exempt
def cropcircle(request):
    image = request.POST.get('image', '')
    return render(request, 'beenthere/cropcircle.html', {
        'image': image})
