def main():
    #Input
    dollar_real = float(input("Enter the dollar value converted in real: "))
    dollar_value = int(input("Enter a dollar value: "))

    #Processing
    total_value_dollar = dollar_real * dollar_value

    #Output
    print(f"The total of the {dollar_value} dollars converted to real is equal to:  {total_value_dollar}$")

main()