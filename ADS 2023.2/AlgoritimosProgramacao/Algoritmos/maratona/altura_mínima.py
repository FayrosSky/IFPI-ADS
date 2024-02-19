def main():
#input
    entrada_dados = input("Digite 1 <= N <= 6 e 90 <= H <= 200: ")

#Processing
    valores = entrada_dados.split()
    valores = list(map(int, valores))

    num_brinquedos = valores[0]
    altura = valores[1]          

    alturas = input("Digite as alturas permitidas: ")
    alturas = alturas.split()
    alturas = list(map(int, alturas))

    contador = 0

    for i in alturas:
        if altura >= i:
            contador += 1
        

#Output
    print(contador)
    
main()


# tupla é um vetor que não conseguimos alterar 
# registro ou objeto, dicionário >>> registro(chave  e valor)
# pesquiasr o que é o for e o range.
# o range que um valor inteiro, então podemos passar o valor do vetor   