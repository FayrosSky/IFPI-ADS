def main():
    frase = 'Feliz dia das maes'

    caractere = frase[8]

    print(frase)
    print(f'Posição 8 temos -> {caractere}')

    # imutável
    try:
        frase[8] = 'o'
    except TypeError:
        print(';)')


    # mostrar_caracteres(frase)
    # mostrar_caractere_pos(frase)
      mostrar_caractere_pos_pares(frase)



    def mostrar_caracteres(frase):
        print('Mostrar caracteres:')
        for caractere in frase:
            print(caractere)    


    def mostrar_caractere_pos(frase):
        index = 0
        tamanho = len(frase)


        while index < tamanho:
            caractere = frase[index]
            print(f'{index} -> {caractere}')

            index += 1
    

    def mostrar_caractere_pos_pares(frase):
        for i in range(len(frase)):
            if eh_par(i):
                print(f'{i} -> {frase[i]}')

    
    def eh_par(numero: int):
        return numero % 2 == 0


main()