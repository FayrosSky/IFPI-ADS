def main():
    #Input
    triangle_height = float(input("Enter the triangle height: "))
    triangle_base = float(input("Enter the triangle base: "))

    #Processing
    area = (triangle_base * triangle_height)/2

    #Output
    print(f"The area of the triangle with {triangle_height} of height and {triangle_base} of base is equal to: {area} a.u")


main()