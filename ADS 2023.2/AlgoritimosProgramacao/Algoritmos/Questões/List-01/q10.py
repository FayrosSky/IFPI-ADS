def main():
    #Input
    num1 = int(input("Enter a number: "))
    num2 = int(input("Enter a second number: "))

    #Processing
    quotient = round(num1 / num2)
    remainder = num1 % num2

    #Output
    print(f"The quotient and the remainder when dividing {num1} by {num2} are respectively: {quotient} and {remainder}")

main()
