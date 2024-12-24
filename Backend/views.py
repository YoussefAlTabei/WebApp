from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from backend.models import Review
from backend.models import Watchlist, Favorites


@login_required
def submit_review(request):
    if request.method == "POST":
        movie_name = request.POST.get("movie_name")
        rating = float(request.POST.get("rating"))
        comment = request.POST.get("comment")
        user = request.user

        # Save the review
        review = Review(movie_name=movie_name, rating=rating, comment=comment, user=user)
        review.save()

        return JsonResponse({"message": "Review submitted successfully!"}, status=201)

    return render(request, "submit_review.html")

def add_to_watchlist(request):
    if request.method == "POST":
        movie_name = request.POST.get("movie_name")
        user = request.user

        # Ensure Watchlist is imported and used correctly
        watchlist_entry, created = Watchlist.objects.get_or_create(user=user, movie_name=movie_name)

        if created:
            return JsonResponse({"message": "Added to watchlist"})
        else:
            return JsonResponse({"message": "Already in watchlist"})
    else:
        return JsonResponse({"error": "Invalid request method"}, status=400)
def add_to_favorites(request):
    if request.method == "POST":
        movie_name = request.POST.get("movie_name")
        user = request.user
        favorites_entry, created = Favorites.objects.get_or_create(user=user, movie_name=movie_name)
        if created:
            return JsonResponse({"message": "Added to favorites!"})
        else:
            return JsonResponse({"message": "Movie already in favorites!"})
