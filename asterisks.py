rows = 5
asterisks = ''

print("1. Menyusun barisan bintang")

for i in range(rows):
	print("*")


print("2. Menggunakan nested loop")

for i in range(rows):
	for j in range(rows):
		asterisks += '*'
	print(asterisks)
	asterisks = ""


print("3. Segitiga Siku-siku")

for i in range(rows):
	for j in range(i+1):
		asterisks += "*"
	print(asterisks)
	asterisks = ""


print("4. Segitiga Siku-siku Terbalik")

for i in range(rows, 0, -1):
	for j in range(0, i, 1):
		asterisks += "*"
	print(asterisks)
	asterisks = ""