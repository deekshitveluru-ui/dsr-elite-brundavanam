import fitz

doc = fitz.open(r"C:\Users\velur\.gemini\antigravity\scratch\dsr-elite-brundavanam\public\DSR_Elite_Brundhavanam.pdf")

print("--- PAGE 6 ---")
print(doc[5].get_text())
print("--- PAGE 7 ---")
print(doc[6].get_text())
print("--- PAGE 15 ---")
print(doc[14].get_text())
