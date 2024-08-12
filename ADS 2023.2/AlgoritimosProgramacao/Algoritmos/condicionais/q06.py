def main():
    #Input

    num1 = int(input("Enter a number: "))
    num2 = int(input("Enter a second number: "))
    num3 = int(input("Enter a third number: "))

    #Processing
    if eh_triangulo(num1, num2, num3):
        if num1 < 90 and num2 < 90 and num3 < 90:
            print(f"This triangle is an acute triangle!")
        elif num1 == 90 or num2 == 90 or num3 == 90:
            print(f"This triangle is a right triangle!")
        else:
            print("This triangle is obtuse triangle!")  
    else:
          print("It's not a triangle!")
    

    
def eh_triangulo(ang1, ang2, ang3):
        soma_angulos = ang1 + ang2 + ang3
        return soma_angulos == 180

main()