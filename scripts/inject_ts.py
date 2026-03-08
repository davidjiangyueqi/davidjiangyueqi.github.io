import re

# 1. Update restaurants.ts
with open("src/data/restaurants.ts", "r") as f:
    rest_content = f.read()

# Replace the array
with open("scripts/restaurants.ts.txt", "r") as f:
    new_rest_array = f.read()

# remove imports from the txt file
new_rest_array = new_rest_array.replace('import { Restaurant } from "./restaurants";\n\n', '')

rest_content = re.sub(r'export const restaurants: Restaurant\[\] = \[.*\];', new_rest_array, rest_content, flags=re.DOTALL)

with open("src/data/restaurants.ts", "w") as f:
    f.write(rest_content)

# 2. Update reviews.ts
with open("src/data/reviews.ts", "r") as f:
    rev_content = f.read()

# Make RestaurantReview type support pdfPaths
rev_content = rev_content.replace(
    "  pdfPath?: string; // e.g. /reviews/DS Fine Dining _ Rosetta.pdf",
    "  pdfPath?: string; // e.g. /reviews/DS Fine Dining _ Rosetta.pdf\n  pdfPaths?: string[]; // Multiple PDFs for multiple visits"
)

# Replace the array
with open("scripts/reviews.ts.txt", "r") as f:
    new_rev_array = f.read()

new_rev_array = new_rev_array.replace('import { RestaurantReview } from "./reviews";\n\n', '')

rev_content = re.sub(r'export const restaurantReviews: RestaurantReview\[\] = \[.*\];', new_rev_array, rev_content, flags=re.DOTALL)

with open("src/data/reviews.ts", "w") as f:
    f.write(rev_content)

print("Injected successfully!")
