def main():
    #Input
    num = int(input("Enter a number between 0 to 100: "))

    #Processing

    #Outputing
    if eh_primo(num):
        print(f"O numero {num} e PRIMO.")
    else:
        print(f"O numero {num} NAO E PRIMO.")
        
    print(f"\nFIM")

    
def eh_primo(numero):
    #Fail Fast
    if numero <= 1:
        return False
    
    if numero == 3 or numero == 5 or numero == 7:
        return True
    
    if not numero % 2 == 0 or numero % 3 == 0 or numero % 5 == 0 or numero % 7 == 0:
        return True
    
    return False

main()