def main():

# Input
a = float(input("Enter the a value: "))
b = float(input("Enter the b value: "))
c = float(input("Enter the c value: "))
d = float(input("Enter the d value: "))
e = float(input("Enter the e value: "))
f = float(input("Enter the f valeu: "))

# Processing
x = (c * e - b * f) / (a * e - b * d)
y = (a * f - c * d) / (a * e - b * d)

# Output
print(f"The solution to x is: {x:.2f}")
print(f"The solution to y is : {y:.2f}")
