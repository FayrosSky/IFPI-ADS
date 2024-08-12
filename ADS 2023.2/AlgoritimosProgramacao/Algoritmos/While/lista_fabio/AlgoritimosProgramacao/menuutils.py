from functools import reduce
import random

def gerar_vetor(n, valor_padrao=None):
    return [valor_padrao] * n

def preencher_manualmente(vetor):
    for i in range(len(vetor)):
        vetor[i] = int(input(f"Digite o valor para a posicao {i}: "))

def preencher_automaticamente(vetor):
    valor_minimo = int(input("Digite o valor minimo: "))
    valor_maximo = int(input("Digite o valor máximo: "))
    for i in range(len(vetor)):
        vetor[i] = random.randint(valor_minimo, valor_maximo)

def mostrar_vetor(vetor):
    print("Vetor:", vetor)

def transformar_vetor(vetor, expoente):
    vetor = list(map(lambda x: x ** expoente, vetor))
    return vetor

def contar_positivos_negativos_zeros(vetor):
    positivos = len(list(filter(lambda x:x>0, vetor)))
    negativos = len(list(filter(lambda x:x<0, vetor)))
    zeros = len(list(filter(lambda x:x==0, vetor)))
    return positivos, negativos, zeros

def somatorio(vetor):
    somatorio_total = reduce(lambda x, y: x + y, vetor)
    somatorio_negativos = reduce(lambda x, y: x + y, filter(lambda x: x < 0, vetor))
    somatorio_positiovos = reduce(lambda x, y: x + y, filter(lambda x: x > 0, vetor ))
    return somatorio_total, mediana_total, media_positivos, mediana_positivos, media_negativos, mediana_negativos

def maior_menor_numero(vetor):
    maior = max(vetor) if vetor else None
    menor = min(vetor) if vetor else None
    return maior, menor

def sortear_numeros(vetor):
    numeros_positivos = list(filter(lambda x: x > 0, vetor))
    numeros_negativos = list(filter(lambda x: x < 0, vetor))

    numero_positivo_sorteado = random.choice(numeros_positivos) if numeros_positivos else None
    numero_negativo_sorteado = random.choice(numeros_negativos) if numeros_negativos else None

    return numero_positivo_sorteado, numero_negativo_sorteado 

def gerar_grupos(N, T):
    numeros = list(range(1, N+1))
    random.suffle(numeros)
    grupos = [numeros[i:i+T] for i in range(0, len(numeros), T)]
    return grupos

def verificar_presenca(vetor, numeros_sistema):
    if len(vetor) > len(numeros_sistema):
        return False
    i = 0
    for num in numeros_sistema:
        if num == vetor[i]:
            i += 1 
            if i == len(vetor):
                return True
    return False

def top_maiores(numeros, N):
    return sorted(numeros, reverse=True)[:N]

def top_menores(numeros, N):
    return sorted(numeros)[:N]

def calcular_media(numeros):
    media = sum(numeros) / len(numeros)
    maiores = [num for num in numeros if num > media]
    menores = [num for num in numeros if num < media]
    return media, maiores, menores

def somatorio_media_positivos_produto_negativos(numeros):
    positivos_multiplos_dois = [num for num in numeros if num > 0 and num % 2 == 0]
    produtos_negativos_pares_metade = 1
    for num in numeros:
        if num < 0 and num % 2 == 0:
            produto_negativos_pares_metade *= num / 2
    return sum(positivos_multiplos_dois) + produtos_negativos_pares_metade

def ordenar_numeros(numeros, opcao):
    if opcao == 'todos':
        return sorted(numeros)
    elif opcao == "pares":
        return sorted([num for num in numeros if num % 2 == 0])
    elif opcao == "impares":
        return sorted([num for num in numeros if num % 2 == 1])
    elif opcao == "positivos":
        return sorted([num for num in numeros if num > 0])
    elif opcao == "negativos":
        return sorted([num for num in numeros if num < 0])
    elif opcao == "multiplos":
        N = int(input("Digite o valor de N: "))
        return sorted([num for num in numeros if num % N == 0])
    
def eliminar_multipos(N, M, numeros):
    return [num for num in numeros if num % N != 0 and num % M != 0]

def sair():
    print("Tchau")
