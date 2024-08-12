import math
def main():
    #Input
    minutes = int(input("Enter a value in minutes: "))

    #Processing
    hours = (minutes / 60)
    value_hours = math.floor(hours)
    value_minutes = minutes % 60

    #Output
    print(f"The entered value of {minutes} minutes converted in hours and minutes is equal to: {value_hours} hour(s) and {value_minutes} minute(s)")
    

main()