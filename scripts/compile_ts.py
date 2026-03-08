import json
import collections

# load the data
data = json.load(open("scripts/data_output.json"))

restaurants = {}
reviews = collections.defaultdict(list)

# We want to sort the visits by date.
# data format: {"DS Fine Dining _ Amber HK.pdf": ["Amber", "Hong Kong", "China", "French", 22.2818, 114.1573, "2023-06-09", "amber-hk"]}

all_visits = []

for filename, info in data.items():
    name, city, country, cuisine, lat, lng, date, slug = info
    all_visits.append({
        "filename": filename,
        "name": name,
        "city": city,
        "country": country,
        "cuisine": cuisine,
        "lat": lat,
        "lng": lng,
        "date": date,
        "slug": slug
    })

# sort by date (oldest to newest)
all_visits.sort(key=lambda x: x["date"])

ts_restaurants = "import { Restaurant } from \"./restaurants\";\n\nexport const restaurants: Restaurant[] = [\n"

# For `restaurants.ts`, they act as points on the map AND points on the timeline.
# The user wants "For restaurant visited several time, juxtapose them and sort by the date visited."
# Since it's a map/timeline, we can just put ALL visits in `restaurants.ts` so the timeline shows every visit correctly!
# Wait, the user said "For restaurant visited several time, juxtapose them and sort by the date visited." This sounds like they are talking about the review page? Or the timeline?
# If we put all visits as separate entries in restaurants.ts with the same slug but different dates...
# The timeline will show "CTBF" on 2022-05-27, and again on 2023-01-10. This makes perfect sense for a timeline!
# And for the FoodDetailPage, it will look up `restaurantReviews` by slug.
# In `restaurantReviews`, we can group the PDFs by slug!

for visit in all_visits:
    ts_restaurants += f"""  {{
    slug: "{visit['slug']}",
    name: "{visit['name']}",
    city: "{visit['city']}",
    country: "{visit['country']}",
    cuisine: "{visit['cuisine']}",
    latitude: {visit['lat']},
    longitude: {visit['lng']},
    shortSummary: "View the full PDF review for the complete story.",
    rating: "Review PDF available",
    visitedAt: "{visit['date']}",
  }},\n"""

ts_restaurants += "];\n"

# now for reviews.ts
ts_reviews = "import { RestaurantReview } from \"./reviews\";\n\nexport const restaurantReviews: RestaurantReview[] = [\n"

visits_by_slug = collections.defaultdict(list)
for visit in all_visits:
    visits_by_slug[visit['slug']].append(visit)

for slug, visits in visits_by_slug.items():
    ts_reviews += f"""  {{
    restaurantSlug: "{slug}",
    backgroundColor: "#000000",
"""
    if len(visits) == 1:
        ts_reviews += f'    pdfPath: "/reviews/{visits[0]["filename"]}",\n'
    else:
        # multiple visits! We should make `pdfPaths` an array. 
        # So we have to change the `RestaurantReview` interface to support either `pdfPath` or `pdfPaths`.
        paths = ", ".join([f'"/reviews/{v["filename"]}"' for v in visits])
        ts_reviews += f'    pdfPaths: [{paths}],\n'
    ts_reviews += "  },\n"

ts_reviews += "];\n"

with open("scripts/restaurants.ts.txt", "w") as f:
    f.write(ts_restaurants)

with open("scripts/reviews.ts.txt", "w") as f:
    f.write(ts_reviews)

print("TS files generated!")
