def main():
    #Input
    hours = int(input("Enter a value in hours: "))

    #Processing
    value_week = round(hours / 168)
    value_day = round((hours % 168) / 24)
    value_hour = ((hours % 168) % 24) 

    #Output
    print(f"The enterd value in hours converted to weeks, days and hours is equal to: {value_week} week(s), {value_day} day(s) and {value_hour} hour(s)")


main()