def main():
    #Input
    #birth date
    age_year = int(input("Enter the person's birth age in years: "))
    age_month = int(input("Enter the person's birth age in months: "))
    age_day = int(input("Enter the person's birth age in days: "))

    #Current date

    current_year = int(input("Enter the current year: "))
    current_month = int(input("Enter the current month: "))
    current_day = int(input("Enter the current day: "))

    #Processing

    total_age_days = age_year * 365 + age_month * 30 + age_day
    total_current_days = current_year * 365 + current_month * 30 + current_day 
 
    age_difference = total_current_days - total_age_days 

    years = round(age_difference/365)
    months = round((age_difference % 365)/30)
    days = (age_difference % 365)%30

    #Output
    print(f"The age of the person is: {years} years, {months} months and {days} days")

main()