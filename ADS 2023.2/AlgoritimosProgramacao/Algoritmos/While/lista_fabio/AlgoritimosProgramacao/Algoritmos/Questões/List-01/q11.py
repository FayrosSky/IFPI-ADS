def main():
    #Input
    num = int(input("Enter a number: "))

    #Processing
    hundreds = round(num / 100)
    dozens = round((num % 100)/10)
    units = (num % 100)%10

    #Output
    print(f"The reverse of the {num} is: {units}{dozens}{hundreds}")

main()