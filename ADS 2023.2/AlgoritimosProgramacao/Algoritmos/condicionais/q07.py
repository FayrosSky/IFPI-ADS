def main():
    #Input

    num1 = int(input("Enter the value of the side of the triangle: "))
    num2 = int(input("Enter the value of the second side of the triangle: "))
    num3 = int(input("Enter the value of the third side of the triangle: "))

    #Processing
    if eh_triangulo(num1, num2, num3):
        if num1 == num2 and num1 == num3 and num2 == num3:
            print("The triangle is equilateral!")
        elif num1 == num2 and num1 != num3:
            print("The triangle is isosceles!")
        else:
            print("This triangle is scalene!")
    else:
        print("It's not a triangle!")
    #Outputing


def eh_triangulo(lado1, lado2, lado3):
    if lado1 < lado2 + lado3 and lado3 < lado2 + lado1 and lado2 < lado1 + lado3:
        return True
    else:
        return False


main()      