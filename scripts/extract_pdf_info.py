import os
import json
from pypdf import PdfReader

pdf_dir = "public/reviews"
results = []

for filename in os.listdir(pdf_dir):
    if filename.endswith(".pdf"):
        filepath = os.path.join(pdf_dir, filename)
        try:
            reader = PdfReader(filepath)
            if len(reader.pages) > 0:
                first_page = reader.pages[0]
                text = first_page.extract_text()
                results.append({
                    "filename": filename,
                    "text": text
                })
        except Exception as e:
            print(f"Error processing {filename}: {e}")

with open("scripts/pdf_info.json", "w") as f:
    json.dump(results, f, indent=2)

print("Extraction complete. Check scripts/pdf_info.json")
