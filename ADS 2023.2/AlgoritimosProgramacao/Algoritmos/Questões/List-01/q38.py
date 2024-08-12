def main():
    #Input
    num1 = int(input("Enter the value of the numerator of the first fraction: "))
    num2 = int(input("Enter the value of the numerator of the second fraction: "))

    den1 = int(input("Enter the value of the denominator of the first fraction: ")) 
    den2 = int(input("Enter the value of the denominator of the second fraction: "))

    #Processing
    sum_fraction = ((num1 * den2) + (num2 * den1))/(den1 * den2)

    #Output
    print(f"The value of the sum of the entered fractions is equal to: {sum_fraction}")

main()