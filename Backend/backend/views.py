from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from backend.models import Review


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
