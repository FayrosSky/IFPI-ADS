def main():
    #Input

    years = int(input("Enter the age in years: "))
    months = int(input("Enter the age in months: "))
    days = int(input("Enter the age in days: "))

    #Processing

    total_days = ((365 * years) + (months * 30) + days)

    #Output
    print(f"The total days of the entered age in days is equal to: {total_days}")

main()