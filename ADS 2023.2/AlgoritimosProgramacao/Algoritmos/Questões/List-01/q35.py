def main():
    #Input
    num = int(input("Enter a 4 digits number: "))

    #Processing

    first_digit = round(num / 1000)
    second_digit =round((num % 1000)/100)
    third_digit = round(((num % 1000) % 100) / 10)
    fourth_digit = ((num % 1000) % 100) % 10
    
    sum_result = first_digit + second_digit + third_digit + fourth_digit 

    #Output
    print(f"The result of the sum of the digits from entered number({num}) is equal to: {sum_result}")


main()