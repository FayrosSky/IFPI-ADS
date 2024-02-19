def main():
    #Input
    value_meter = int(input("Enter a value in meters: "))

    #Processing
    value_km = round(value_meter / 1000)
    remainder_meter = (value_meter % 1000)

    #Output
    print(f"The entered value of {value_meter} m converter to km and m is equal to: {value_km} km and {remainder_meter} m")
main()