def main():
    #Input
    num1 = int(input("Enter a integer: "))
    num2 = int(input("Enter a second integer: "))
    num3 = int(input("Enter a third integer: "))
    num4 = int(input("Enter a fourth integer: "))
    num5 = int(input("Enter a fifth integer: "))

    #Processing
    average = (num1 + num2 + num3 + num4 + num5)/5
    
    if num1 > average:
        print(f"{num1} is greater than average ({average})")
    if num2 > average:
        print(f"{num2} is greater than average ({average})")
    if num3 > average:
        print(f"{num3} is greater than average ({average})")
    if num4 > average:
        print(f"{num4} is greater than average ({average})")
main()