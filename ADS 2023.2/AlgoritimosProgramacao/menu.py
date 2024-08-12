
# linha do nano
# nova

def main():
    from functools import reduce

def multiplicacao(a, b):
    return a * b

def soma(a, b):
    return a + b

def menu():
    opcoes = ['1 - Somar', '2 - Multiplicar', '3 - Sair']
    while True:
        print("=== Menu ===")
        for opcao in opcoes:
            print(opcao)
        escolha = input("Escolhar uma opção: ")

        if escolha == '1':
            numeros = input("Digite os numeros separados por espaço: ").split()
            numeros = list(map(int, numeros))
            resultado = reduce(multiplicacao, numeros)
            print("Resultado: ", resultado)
        elif escolha == '2':
            numeros = input("Digite numeros separados por espaço: ").split()
            numeros = list(map(int, numeros))
            resultado = reduce(multiplica, numeros)
            print("Resultado: ", resultado)
        elif escolha == '3':
            break
        else:
            print("Opção inválida!")
    
main()
