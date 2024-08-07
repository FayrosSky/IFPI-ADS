def main():
    #Input
    
    num1 = int(input("Enter a number: "))
    num2 = int(input("Enter a second number: "))
    num3 = int(input("Enter a third number: "))
    option = int(input("Enter the option: "))

    #Processing

    choose = choose_option(option, num1, num2, num3)

    #Outputing

def choose_option(option, numero1, numero2, numero3):
    if option == 1:
        print(f"{numero1}")
    elif option == 2:
        print(f"{numero2}")
    else:
        print({numero3})
main()