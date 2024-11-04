#Importando módulos padrão
#Módulos são arquivos que contêm definições e implementações de funções, classes e variáveis que vc pode reutilizar em diferentes partes do seu código. Python possui muitos módulos padrão que vc pode importar para ampliar suas funcionalidades, sem ter que reinventar a roda.

#Analogia: Pense nos módulos como ferramentas em uma caixa de ferramentas. Se vc precisa de uma chave de fenda, basta abrir a caixa e pegar a ferramenta que já está lá, sem precisar fabricá-la do zero.

#Importando um módulo: Para importar um módulo, usamos a palavra-chave import. Por exemplo, o módulo math contém funções matemáticas avançadas:

import math
print(math.sqrt(16)) #saída: 4.0 

#Importando apenas funções específicas
#Você também pode importar uma parte do módulo usando from ...

from math import pi
print(pi)  #saída: 3.141592653589783


#Renomeando módulos
#Você pode usar a palavra-chave as para renomear um módulo ou função para simplificar seu uso

import math as m
print(m.sqrt(25))  #saída: 5.0

#Assim como o Python oferece módulos, você pode também criar os seus. Basta criar um arquivo .py com funções e variáveis que deseja reutilizar.

import meu_modulo
print(meu_modulo.saudacao("Maria")) #Saída: Olá, Maria!

#Dica: Mantenha seus módulos organizados em pastas para facilitar a reutilização

#Usando with para manipulação de arquivos
#A palavra-chave with permite abrir e fechar arquivos de forma automática, tornando o código mais limpo e seguro.
with open("arquivo.txt", "r") as arquivo:
    conteudo = arquivo.read()
    print(conteudo)
    
    
#Manipulação de arquivos CSV
#Arquivos CSV(Comma-Separated Values) são comumente usados para armazenar dados tabulares. Python possui o módulo csv para facilitar a leitura e escrita desse arquivos.

#Lendo um arquivo CSV

import csv

with open("airports.csv", "r") as arquivo_csv:
    leitor = csv.reader(arquivo_csv)
    for linha in leitor:
        print(linha)


#escrevendo em um arquivo csv:

dados = [["Nome", "Idade"], ["Ana", 28], ["Carlos", 35]]

with open("dados.csv", "w", newline="") as arquivo_csv:
    escritor = csv.writer(arquivo_csv)
    escritor.writerows(dados)


#Pense no CSV como uma planilha de Excel, onde os dados estão organizados em linhas e colunas


#Uso da biblioteca JSON
#O JSON (JavaScript Notation) é um formato de armazenamento de dados muito utilizado para comunicação entre sistemas. Python possui o módulo json para manipular esses arquivos.

#Lendo um arquivo JSON
import json

with open("dados.json", "r") as arquivo_json:
    dados = json.load(open("dados.json", "r"))
    print(dados)
    
    
#Escrevendo em um arquivo json:

dados = {"nome": "Ana", "idade": 28, "cidade": "São Paulo"}
with open("dados.json", "w") as arquivo_json:
    json.dump(dados, arquivo_json)


#Analogia: O JSON é como uma receita de culinária, onde as informações são armazenadas de forma estruturada e fácil de entender.


#Trabalhando com arquivos binários
#Além de arquivos de texto e CSV, você pode manipular arquivos binários, como imagens, arquivos executáveis, entre outros.

#Lendo um arquivo binário
with open("imagem.jpeg", "rb") as arquivo_binario:
    conteudo = arquivo_binario.read()
    print(conteudo)

#Escrevendo em um arquivo binário
with open("copia_imagem.png", "wb") as arquivo_binario:
        arquivo_binario.write(conteudo)

