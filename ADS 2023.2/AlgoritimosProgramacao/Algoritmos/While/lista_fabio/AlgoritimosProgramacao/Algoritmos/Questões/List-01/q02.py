def main():
    #Input
    value_hours = int(input("Enter a value in hours: "))
    value_minutes = int(input("Enter a value in minutes: "))

    #Processing
    total_value_minutes = (value_hours * 60) + value_minutes

    #Output
    print(f"Total value in minutes of {value_hours} hours and {value_minutes} minutes is: {total_value_minutes} minutes ")

main()