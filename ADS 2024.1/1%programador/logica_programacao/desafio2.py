frase = "Aprenda programação seguindo o 1% programador"

palavras = frase.split(" ")
contador = 0


#for palavra in palavras:
#    if len(palavra) > 5:
#        contador = contador + 1

for j in range(len(palavras)):
    if len(palavras[j]) > 5:
        contador += 1

print(palavras)
print(contador) 