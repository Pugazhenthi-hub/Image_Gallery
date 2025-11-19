from django.shortcuts import render

def gallery(request):
    # Provide the actual filenames that live under static/galleryapp/images/
    images = [f'img{i}.jpeg' for i in range(1, 11)]
    return render(request, "gallery.html", {"images": images})
