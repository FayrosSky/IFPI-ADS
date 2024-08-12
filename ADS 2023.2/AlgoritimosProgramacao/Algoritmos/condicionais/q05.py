def main():
    #Input

    num1 = int(input("Enter a number: "))
    num2 = int(input("Enter a second number: "))
    num3 = int(input("Enter a third number: "))

    #Processing

    if num1 > num2: 
        if num2 > num3:
            print(f"The entered numbers {num1}, {num2}, {num3} written in ascending order is equal to: {num3}, {num2} and {num1}.")
        else:
            print(f"The entered numbers {num1}, {num2} and {num3} written in ascending order is equal to: {num2}, {num3} and {num1}.")
    elif num2 > num1: 
        if num1 > num3:
            print(f"The entered numbers {num1}, {num2}, {num3} written in ascending order is equal to: {num3}, {num1} and {num2}.")
        else:
            print(f"The entered numbers {num1}, {num2} and {num3} written in ascending order is equal to: {num1}, {num3}, {num2}.")
    elif num3 > num1:
        if num1 > num2:
            print(f"The entered numbers {num1}, {num2} and {num3} written in ascending order is equal to: {num2}, {num1} and {num3}. ")
        else:
            print(f"The entered numbers {num1}, {num2} and {num3} written in ascending order is equal to: {num1}, {num2} and {num3}.")
    elif num1 > num3:
        if num3 > num2:
            print(f"The entered numbers {num1}, {num3} and {num2} written in ascending order is equal to: {num2}, {num3} and {num1}.")
        else:
            print(f"The entered numbers {num1}, {num2} and {num3} written in ascending order is equal to: {num3}, {num2} and {num1}.")
    
    #Outputing

main()