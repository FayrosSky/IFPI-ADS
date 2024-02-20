import math
def main():
    #Input

    x1 = int(input("Enter the value of x1:"))
    y1 = int(input("Enter the value of y1: "))
    x2 = int(input("Enter the value of x2: "))
    y2 = int(input("Enter the value of y2: "))

    #Processing
    distance_length = math.sqrt((x1 - x2)**2 + (y1 - y2)**2)

    #Output
    print(f"The value of the distance length is equal to: {distance_length}")

main()