def main():
    #Input
    minutes = int(input("Enter the value of minutes: "))

    #Processing
    value_day = round(minutes / 1440)
    valeu_hours = round((minutes % 1440) / 60)
    value_minutes = ((minutes % 1440) % 60) 

    #Output
    print(f"The entered value of {minutes} minutes converted to days, hours and minutes is equal to: {value_day} day(s), {valeu_hours} hour(s) and {value_minutes} minutes")


main()