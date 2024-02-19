def main():
    #Input
    value_seconds = int(input("Enter a value in seconds: "))

    #Processing
    hours = round(value_seconds / 3600)
    minutes = round((value_seconds % 3600) / 60)
    seconds = (value_seconds % 3600) % 60

    #Output
    print(f"The entered value of {value_seconds} converted in hours, minutes and seconds is equal to: {hours} hours, {minutes} minutes and {seconds} seconds.")

main()