def main():
    #algoritmo para ordenar um array do menor para o maior
    
    print(ordenacaoporSelecao[])     

   
main()

def buscarMenor(arr):
    menor = arr[0]
    menor_indice = 0
    for i in range(1, len(arr)):
        if arr[i] < menor:
            menor = arr[i]
            menor_indice = i
    return menor_indice

def ordenacaoporSelecao(arr):
    novoArr = []
    for i in range(len(arr)):
        menor = buscarMenor(arr)
        novoArr.append(arr.pop(menor))
    return novoArr