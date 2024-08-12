def main():
    #Input
    num = int(input("Enter a 3-digit integer value: "))

    #Processing

    first_number = round(num / 100)
    second_number = round((num % 100) / 10)
    third_number = (num % 100) % 10

    inverse_number = (third_number * 10 ** 2 + second_number * 10 ** 1 + first_number * 10 ** 0)

    result = num - inverse_number

    #Output
    print(f"The result of the sum of the entered number ({num}) and its inverse ({inverse_number}) is equal to: {result}")

main()