def main():
    #Input
    temperatureC = float(input("Enter a temperature valeu: "))

    #Processing
    temperatureF = (((9 * temperatureC) + 160)/5)

    #Output
    print(f"The temperature of {temperatureC} °C converted to °F is equal to: {temperatureF}")

main()