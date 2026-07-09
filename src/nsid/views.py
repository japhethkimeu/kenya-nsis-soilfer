from django.shortcuts import render


def nsid_about(request):
    return render(request, 'nsid/nsid_about.html')


def kenya_soils(request):
    return render(request, 'nsid/kenya_soils.html')


def soil_data(request):
    return render(request, 'nsid/soil_data.html')


def soil_maps(request):
    return render(request, 'nsid/soil_maps.html')
