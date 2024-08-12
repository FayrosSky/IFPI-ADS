def main():
    #Input
    num = int(input("Enter a number with 3 digits: "))

    #Processing
    hundreds = round(num / 100)
    dozens = round((num % 100) / 10)
    units = round((num % 100) % 10)

    sum = hundreds + dozens + units

    #Output 
    print(f"The sum of H + D + U is equal to: {sum}")


main()