def main():
    #Input

    A = int(input("Enter a integer positive: "))
    B = int(input("Enter another integer positive: "))
    C = int(input("Enter another integer positive: "))

    #Processing

    R = (A + B) ** 2
    S = (B + C) ** 2
    D = (R + S)/2
    
    #Output
    print(f"The value of R, S and D is equal respectively to: {R}, {S} and {D}.")

main()