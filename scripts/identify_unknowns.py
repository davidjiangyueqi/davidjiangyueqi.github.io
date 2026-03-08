import sys
from pypdf import PdfReader

def extract(filename):
    print(f"--- {filename} ---")
    try:
        reader = PdfReader(f"public/reviews/{filename}")
        for i in range(min(3, len(reader.pages))):
            print(reader.pages[i].extract_text()[:200])
    except Exception as e:
        print(f"Error: {e}")

extract("DS Fine Dining _ ADAM.pdf")
extract("DS Fine Dining _ RAD.pdf")
