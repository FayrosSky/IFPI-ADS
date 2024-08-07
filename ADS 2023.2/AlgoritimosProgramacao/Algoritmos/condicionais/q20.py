def main():
    #Input
    angle = float(input("Enter a angle value between 0° and 360°: "))

    #Processing
    
    if 0 < angle < 90:
        print("The angle is located in the first quadrant: ")
    elif 90 < angle < 180:
        print("The angle is located in the second quadrant: ")
    elif 180 < angle < 270:
        print("The angle is located in the third quadrant: ")
    else:
        print("The angles is located in fourth quadrant: ")

    #Output

main()