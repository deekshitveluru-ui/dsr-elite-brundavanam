import sys
try:
    import fitz
    import os
    print("fitz imported successfully")
except Exception as e:
    print("Error:", e)
    sys.exit(1)

try:
    doc = fitz.open(r"C:\Users\velur\Downloads\DSR Elite Brundhavanam.pdf")
    os.makedirs("public/map-images", exist_ok=True)
    count = 0
    for i in range(len(doc)):
        for img in doc.get_page_images(i):
            xref = img[0]
            pix = fitz.Pixmap(doc, xref)
            if pix.n - pix.alpha < 4:
                pix.save(f"public/map-images/img_{count}.png")
            else:
                pix1 = fitz.Pixmap(fitz.csRGB, pix)
                pix1.save(f"public/map-images/img_{count}.png")
                pix1 = None
            pix = None
            count += 1
    print("Extracted", count, "images")
except Exception as e:
    print("Runtime Error:", e)
