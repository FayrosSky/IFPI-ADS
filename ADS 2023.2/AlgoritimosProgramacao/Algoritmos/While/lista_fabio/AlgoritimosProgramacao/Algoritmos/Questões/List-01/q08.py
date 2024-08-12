def main():
#Input
    num1 = int(input("Enter a number value: "))
    num2 = int(input("Enter a second number value: "))

#Processing
    sum = num1 + num2
    subtraction = num1 - num2
    result = sum/subtraction

#Output
    print(f"The result of the sum of the number {num1} and {num2} by the subtraction of {num1} and {num2} is equal to: {result}")

main()