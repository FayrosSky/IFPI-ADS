def main():

    #Input

    valuex1 = int(input("Enter x1 value: "))
    valuex2 = int(input("Enter y1 value: "))

    valuey1 = int(input("Enter x2 value: "))
    valuey2 = int(input("Enter y2 value: "))


    #Processing
    area = calculate_area(valuex1, valuex2, valuey1, valuey2)

    #Output
    print(f"The area of rectangle triangle is: {area} u.a")




def calculate_area(valuex1, valuex2, valuey1, valuey2):
    area_valeu = round(((valuex1 - valuex2)**2 + (valuey1 - valuey2)**2)**(0.5), 2)
    return area_valeu

main()