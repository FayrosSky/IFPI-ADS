import math
def main():

    #Input
    num = int(input("Enter a number of two digits: "))

    #Processing
    dezena = num / 10
    dezena_arredondada =  math.floor(dezena)

    unidade = num % 10
    
    if dezena_arredondada == unidade:
        print(f"The tens digit of the number {num} is the same as the unit digit.")
    else:
        print(f"The tens digit of the number {num} is different from the units digit")

    #Output

main()