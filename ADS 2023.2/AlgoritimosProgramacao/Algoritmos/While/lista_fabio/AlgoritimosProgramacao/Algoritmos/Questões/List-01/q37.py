def main():
    #Input

    total_days = int(input("Enter the age in days: "))

    #Processing

    years = round(total_days / 365)
    months = round((total_days % 365) / 30)
    days = (total_days % 365) % 30

    #Output    
    print(f"The value of the days entered converted in years, months and days is equal to: {years} anos, {months} mes and {days} dias.")
main()