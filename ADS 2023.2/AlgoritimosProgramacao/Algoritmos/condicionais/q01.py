def main():
    #Input

    num1 = int(input("Enter a number: "))
    num2 = int(input("Enter a second number: "))
    num3 = int(input("Enter a third number: "))

    #Processing
    count = 0
    if num1 == num2:
        count += 1

        if num1 == num3:
            count += 1

            if num2 == num3:
                count += 1

    #Output
    print(f"The total igual number is to: {count}")

main()