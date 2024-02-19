def main():
    #Input

    binary_value = int(input("Enter a binary value of 4 digits: "))

    #Processing

    first_digit = round(binary_value / 1000)
    second_value = round((binary_value % 1000) / 100)
    third_value = round(((binary_value % 1000) % 100)/10)
    fourth_value = ((binary_value % 1000) % 100) % 10

    decimal_value = ((first_digit * 2 ** 3) + (second_value * 2 ** 2) + (third_value * 2 ** 1) + (fourth_value * 2 ** 0))

    #Output
    print(f"The entered binary value of {binary_value} bits converted to decimal base is equal to: {decimal_value}")

main()