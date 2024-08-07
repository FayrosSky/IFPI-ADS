def main():
    #Input

    num1 = int(input("Enter a number: "))
    num2 = int(input("Enter a second number: "))

    #Processing

    division = num1 / num2
    division_rounded1 = round(division, 1)
    division_rounded = round(division)
    remainder = division_rounded1 - division_rounded

    if remainder >= 0.5:
        new_divison_round = division_rounded + 1
        print(f"The rounded number by the division between {num1} and {num2} is equal to: {new_divison_round}")
    else:
        print(f"The rounded number by the division between {num1} and {num2} is equal to: {division_rounded}")

    #Output

main()