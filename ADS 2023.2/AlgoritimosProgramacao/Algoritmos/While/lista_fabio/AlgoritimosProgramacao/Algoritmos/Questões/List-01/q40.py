def main():
    #Input
    years = int(input("Enter a number of years the user has smokes: "))
    cigarretes_per_day = int(input("Enter the number of cigarretes smoked per day: ")) 
    cigarette_price = int(input("Enter the cigarette price: "))

    #Processing
    total_money_spent = (years * 365 * cigarretes_per_day * cigarette_price)

    #Output
    print(f"The total money spent on smoking cigarretes is equal to: {total_money_spent}")

main()