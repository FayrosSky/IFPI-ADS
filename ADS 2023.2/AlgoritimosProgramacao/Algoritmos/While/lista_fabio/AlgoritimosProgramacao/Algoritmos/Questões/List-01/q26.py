def main():
    #Input
    value_day = int(input("Enter a value in days: "))

    #Processing
    value_week = round(value_day / 7) 
    value_day_remainder = value_day % 7
    
    #Output
    print("The entered value of {value_day} days converted to week and day is equal to: {value_week} weeks and {value_day_remainder}")

main()