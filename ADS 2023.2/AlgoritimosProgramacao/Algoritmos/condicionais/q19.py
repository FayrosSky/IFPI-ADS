def main():
    #Input
    height = float(input("Enter an height: "))
    weight = float(input("Enter an weight: "))

    #Processing
    bmi = (weight / height ** 2)
    rounded_bmi = round(bmi, 2)
    #Output
    print(f"Your BMI with weight equal to {weight} and height equal to {height} is: {rounded_bmi}")

main()