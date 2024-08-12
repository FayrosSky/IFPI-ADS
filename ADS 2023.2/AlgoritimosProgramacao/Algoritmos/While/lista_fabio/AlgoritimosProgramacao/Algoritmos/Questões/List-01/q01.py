def main():
#Input
    sms = int(input("Enter a speed in m/s: "))

#Processing
    skm = round(sms * 3.6)

#Output
    print(f"The entered speed of {sms} m/s converted to km/h is: {skm} k/h")
main()