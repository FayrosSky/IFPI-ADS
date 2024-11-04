#Manipulação de arquivos
#Python oferece uma série de ferramentas para ler e escrever em arquivos, o que é extremamante útil para armazenas e processar dados. Pense nos arquivos como cadernos onde você pode registrar e consultar informações a qualquer momento.

#Leitura e escrita de arquivos de texto
#A manipulação de arquivos de texto em Python é feita utilizando as funções open(), read(), write(), e close().

#Abrindo um arquivo
#Para abrir um arquivo, usamos a função open(), que requer o nome do arquivo e o modo de abertura:
# 'r': leitura(read)
# 'w': escrita(write) - cria um novo arquivo ou substitui o existente
# 'a': adiciona(append) - adiciona o conteúdo ao final do arquivo existe


arquivo = open("arquivo.txt", "w")
arquivo.write("Olá, Python")
arquivo.close()

with open("arquivo.txt", "a") as arquivo:
    arquivo.write("continuando no python\n")