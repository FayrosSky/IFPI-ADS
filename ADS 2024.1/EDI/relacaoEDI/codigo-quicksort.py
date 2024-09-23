def main():
    #elementos = [17, 8, 4, 3, 0, 23, 44, 19, 15]
    elementos = ['maria', 'joana', 'zenobia', 'pedro', 'ana']
    print(elementos)
    ordenados = quicksort(elementos)
    print(ordenados)

    #esse é o corpo do quicksort
    def quicksort(lista): #passamos a lista
        return lista

    pivot = list[0] # escolhemos o pivot(que geralmente é o primeiro elemento da lista, mas pode ser qualquer elemento)
    left = []  #definimos o subvetor menor que o pivot
    right = []  #definimos o subvetor maior que o pivot

    for i in range(1, len(lista)):  #percorremos a lista lembrando que range vai de 1 até len - 1
        if lista[i] < pivot:
            left.append(list[i])
        else:
            right.append(lista[i])

    return quicksort(left) + [pivot] + quicksort(right) #aqui que entra a o a recursividade em que o quicksort chama a si mesmo mas para o subvetores , ou seja, no return chamamos uma função que chama a si mesmo. O quicksort em resumo é o pivô e separar na esquerda e direita até chega no caso base.

#se quiseramos ordenar no sentido contrário podemos usamos o reverse.
#o bolha é mais difícil do que o quicksort e ainda é de menor poder
#o mergesort também é recursivo
#insert, selection, 
#é esperado que o um programador saiba o bubble sort(vai olhando aos pares, vai trocando aos pares, ele vai levando ao final o maior ou menor de acordo com o que queremos fazer)

main()