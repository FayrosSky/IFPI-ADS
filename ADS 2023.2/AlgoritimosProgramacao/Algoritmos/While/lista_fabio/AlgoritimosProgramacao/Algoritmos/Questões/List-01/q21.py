def main():
    
    #Input
    temperatureF = float(input("Enter a temperature in °F: "))

    #Processing
    temperatureC = ((5 * temperatureF - 160)/9)
    rounded_temperatureC = round(temperatureC, 2)

    #Output
    print(f"The temperature of {temperatureF} °F converted to °C is equal to: {rounded_temperatureC}°C ")

main()