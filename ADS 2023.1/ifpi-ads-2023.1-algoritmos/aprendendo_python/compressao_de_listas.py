#Q compressão de listas é uma maneira concisa de criar listas em Python, tornando seu código mais legível e eficiente

# Sintaxe básica
numeros = [x for x in range(5)]
print(numeros) # [0, 1, 2, 3, 4]


#Compressão de listas com condições
pares = [x for x in range(10) if x % 2 == 0]
print(pares) # [0, 2, 4, 6, 8]