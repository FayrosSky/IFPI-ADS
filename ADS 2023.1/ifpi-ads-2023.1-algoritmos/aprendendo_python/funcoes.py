#Funções em Python:
#São blocos de códigos reutilizáveis que executam uma tarefa específica.

#Criando uma função
#palavra-chave def + nome da função + ()

def saudacao():
    print("Olá, seja bem-vindo ao mundo Python!")
    
#Para chamar a função, basta usar seu nome seguido de parênteses:

saudacao() 

#Parâmetros: As funções podem receber parâmetros, que são valors enviados para a função quando ela é chamada, permitindo que ela trabalhe de forma mais dinâmica

#Funções com parâmetros
def saudacao(nome):
    print(f"Olá, {nome}, seja bem-vindo!")
    
#Ao chamar a função, você passa o argumento:
saudacao("Maria") #Saída: Olá, Maria, seja bem-vindo!

#Analogia: Parâmetros são como os ingredients de uma receita. A função "bolo" precisa de ingredientes como "farinha" e "açúcar" para ser executada.


#Parâmetros com valor padrão
#Você pode definir um valor padão para um parâmetro. Se nenhum valor for fornecido, o padrão será usado.

def saudacao(nome="visitante"):
    print(f"Olá, {nome}, seja bem-vindo!")
    
saudacao()

#Uma função pode retornar um valor-padrão usando a palavra-chave return

def soma(a, b):
    return a + b


resultado = soma(5, 3)
print(resultado) #saída: 8
#O return é como o garçom entregando seu pedido. Ele leva o resultado da função de volta para quem a chamou.



#Funções anônimas(lambda)
#As funções lambda são funções anônimas (sem nome) que permitem criar pequenas funções em apenas uma linha. Elas são ideais para tarefas rápidas que não exigem a definição completa de uma função def.

#Criando uma função lambda
#A sintaxe de uma função lambda é a seguinte:
# lambda argumentos: expressão

dobro = lambda x: x * 2
print(dobro(5)) #saída: 10
 
#lambda x: x * 2 é equivalente a: 
# def dobro(x):
#   return x * 2

#Usando lambda com múltiplos argumentos
#Você pode usar 

soma = lambda x, y: x + y
print(soma(3, 4)) #saída: 7 

#Analogia: Imagine a função lambda como um atalho de teclado . Ela permite realizar a mesma tarefa que uma função comum, mas de forma mais rápida e direta.

#Funções embutidas mais comuns(map, filter, zip, etc.)
#Python oferece várias funções embutidas que facilitam a manipulação de coleções de dados, como map(), filter(), e zip().


#map(): A função map() aplica uma função a cada item de um iterável (como uma lista) e retorna um novo iterável com os resultados.

numeros = [1, 2, 3, 4]
dobrados = list(map(lambda x: x * 2, numeros))
print(dobrados)  #[2, 4, 6, 8]


#Filter: A função filter() cria um iterável contendo apenas os itens que atendem a um condição.

numeros = [1, 2, 3, 4, 5]
pares = list(filter(lambda x: x % 2 == 0, numeros))
print(pares) #saída: [2, 4]


#Zip(): A função zip() combina múltiplos iteráveis(listas, tuplas, etc.) em pares. É como fechar o ziper de uma jaqueta, onde os dentes de cada lado se unem.

nomes = ["Ana", "Bruno", "Carlos"]
idades = [25, 30, 35]
combinacao = list(zip(nomes, idades))
print(combinacao) #Saída: [('Ana', 25), ('Bruno', 30), ('Carlos', 35)]







