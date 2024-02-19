def main():
    print('***** AREA TRIANGULO *****')
    
    # Entrada
    base = float(input("Base: "))
    altura = float(input("Altura: "))
    
    # Processamento 
    area = calcular_area(base, altura)

    # Saída
    print(f"A área do triângulo é: {area}")



# Definição de uma função em python
def calcular_area(b, a):
    resultado = (b * a) / 2
    return resultado

# Chamar a função main
main()

