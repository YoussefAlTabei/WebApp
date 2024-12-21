from django.contrib import admin

from backend.models import Review, Watchlist, Favorites


admin.site.register(Review)
admin.site.register(Watchlist)
admin.site.register(Favorites)
