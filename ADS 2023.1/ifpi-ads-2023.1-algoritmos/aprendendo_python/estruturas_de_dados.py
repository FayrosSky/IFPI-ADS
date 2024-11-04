#Listas
minha_lista = [1, 2, 3, "python", True]
print(minha_lista) # [1, 2, 3, "Python", True]

#Acessando elementos
print(minha_lista[0]) # 1
print(minha_lista[3]) #python

#Dica: Use índices negativos para acessar os elementos de trás para frente
print(minha_lista[-1]) # True
print(minha_lista[-2]) # python


#Modificando listas

#Adicionar: Use append() para adicionar um elemento ao final da lista
minha_lista.append("Novo item")
print(minha_lista)

#Remover: Use remove() para adicionar um elemento ao final da lista
minha_lista.remove("Novo item")
print(minha_lista)

minha_lista.pop(0) #Remove o primeiro elemento
print(minha_lista)

#Iterando sobre listas
#Podemos usar o for para percorrer cada item da lista
#Ex:
for item in minha_lista:
    print(item)


#Tuplas: são similiares às listas, mas são imutáveis, ou sejam não podem ser alteradas depois de criadas. Pense nelas como o menu de um resturante. Uma vez que o meu está impresso, não é possível alterar as opções sem fazer um novo.

#Cruiando Tuplas: Use () para criar um tupla
minha_tupla = (1, 2, 3, "Python", True)
print(minha_tupla)

#Acessando elementos da tupla: O acesso é feito da mesma forma que em listas, utilizando índices
print(minha_tupla[1]) #2


#Conjuntos(sets): São coleções não ordenadas e sem elementos duplicados. Pense neles como uma caixa de lápis de cor, onde cada cor aparece apenas uma vez.

#Criando conjuntos: Use {} para criar um conjunto.
meu_conjunto = {1, 2, 2, 3, 4, 4}
print(meu_conjunto) # {1, 2, 3, 4}

#Operações com conjuntos
#Podemos realizar operações como união ( | ), interseção (&) e diferença ( - )
a = {1, 2, 3}
b = {3, 4, 5}

print(a | b) # União: (1, 2, 3, 4, 5)
print(a & b) #Interseção: (3)
print(a - b) #Diferença: (1, 2)

#Dicionários: Os dicionários são como um manual de instruções, onde cada "palavra" tem uma "significado". Eles armazenam pares de chave: valor
#Criando dicionários: Use chaves {} e separe os pares com :

meu_dict = {"nome": "Python", "ano": 1991, "tipo": "Linguagem de Programação"}
print(meu_dict)


#Acessando e modificando valores

print(meu_dict["nome"]) #"Python"

#Modificando
meu_dict["ano"] = 2024
print(meu_dict)

#Métodos Úteis de dicionários

#keys(): retorna todas as chaves
#values(): retorna todos os valores
#item(): retorna todos os pares chaves-valor

print(meu_dict.keys()) #dict_keys(['nome', 'ano', 'tipo'])
print(meu_dict.values()) # dict_values(['Python', 2024, 'Linguagem de Programação'])


#Operações e métodos com cada estrutura de dados
#listas
#len(lista): retorna o número de elementos
#max(lista), min(lista): retorna o maior e o menor elemento
#sort(): ordena a lista em ordem crescente

lista = [3, 1, 4, 1, 5]
lista.sort()
print(lista)

maior = max(lista)
menor = min(lista)
print(maior, menor)


#Tuplas
#count(valor): conta quantas vezes o valor parece na tupla
#index(valor): retorna o índice da primeira ocorrência do valor


#Conjuntos
#add(elemento): Adiciona um elemento ao conjunto
#remove(elemento): Remove um elemento específico

meu_conjunto.add(6)
print(meu_conjunto) # {1, 2, 3, 4, 6}

#Dicionários
# get(chave): retorna o valor associado à chave,, ou None se a chave não existir
#pop(chave): remove a chave e retorna seu valor


valor = meu_dict.pop("ano")
print(valor) #2024
print(meu_dict)