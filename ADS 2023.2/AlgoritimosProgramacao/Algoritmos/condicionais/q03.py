def main():
    #Input

    num1 = int(input("Enter a numeber: ")) 
    num2 = int(input("Enter a second number: "))
    num3 = int(input("Enter a third number: "))

    #Processing

    if num1 > num2 and num1 > num3:
        print(f"The number{num1} is the biggest")

    elif num2 > num3 and num2 > num3:
        print(f"The numebr {num2} is the biggest")
        
    else:
        print(f"The number {num3} is the biggest ")

    #Output

main()