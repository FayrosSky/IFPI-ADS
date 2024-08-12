def main():
    #Input
    
    num1 = int(input("Enter the side 1: "))
    num2 = int(input("Enter the side 2: "))
    num3 = int(input("Enter the side 3: "))

    #Processing

    if (triangle_rectangle(num1, num2, num3)):
        print("Yes! It's triangle rectangle!")
    else:
        print("It's not a triangle rectangle!")

    #Output
    print(f"End!")





def its_triangle(side1, side2, side3):
    if (side1 < side2 + side3) and (side2 < side1 + side3) and (side3 < side1 + side2): 
        return True
    else:
        return False

def triangle_rectangle(num1, num2, num3):
    if its_triangle(num1, num2, num3):
        if (num1**2 == num2**2 + num3**2) or (num2**2 == num1**2 + num3**2) or (num3**2 == num1**2 + num2**2):
            return 'Right Triangle'
        else:
            return 'Its not a triangle_rectangle'
main()