def main():
    #Input
    num = int(input("Enter a 3 digits number: "))

    #Processing

    first_number = round(num / 100)
    second_number = round((num % 100) / 10)
    third_number = (num % 100) % 10

    inverse_number = first_number + second_number * 10 + third_number * 100

    subtraction_result = num + inverse_number

    #Output
    print(f"The result of the sum between of the entered number {num} and its inverse {inverse_number} is equal to: {subtraction_result}")


main()