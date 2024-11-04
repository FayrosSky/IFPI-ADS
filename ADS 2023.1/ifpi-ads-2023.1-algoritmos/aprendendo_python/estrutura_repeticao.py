#For: usado quando sabemos o número de iterações ou quando queremos percorrer uma sequência (lista, tupla, string, etc).

nomes = ["Ana", "Carlos", "Bianca"]
for nome in nomes:
    print("Olá,", nome)
    
    
#Função range() com for
#O range() gera uma sequencia de números. Ele é muito útil em conjunto com for

for i in range(5):
    print(i)
    
#Estrutura While
#Usado quando não sabemos quantas vezes a repetição deve ocorrer, pois ela depende de uma condição ser verdadeira

contador = 0
while contador < 5:
    print("Contagem:", contador)
    contador += 1
    
    
    
#Controle de loops (break continue, pass)

#break encerra o loop imediatamente

for numero in range(10):
    if numero == 5:
        break
    print(numero)
    

#continue interrompe a iteração atual e passa para a próxima

for numero in range(5):
    if numero == 2:
        continue
    print(numero)


#pass é um placeholder. Não faz nada, mas é útil quando a sintaxe exige que um bloco de código esteja presente. 


for i in range(3):
    pass #Futuramente, adicionaremos o código aqui


#

    
    









