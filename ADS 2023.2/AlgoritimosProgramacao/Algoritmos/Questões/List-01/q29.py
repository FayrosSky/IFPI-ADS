def main():
    #Input
    months = int(input("Enter a value in months: "))

    #Processing
    value_years = round(months / 24) 
    value_months = months % 24

    #Output
    print(f"The entered value of {months} months converted to years and months is equal to: {value_years} years and {value_months} months ")


main()