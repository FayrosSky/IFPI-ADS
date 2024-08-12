def main():
    renda_familiar = float(input('Renda Familiar: '))
    valor_auxilio = calcular_bolsa(renda_familiar)
    print(f'O valor da bolsa é de: {valor_auxilio}'.format(round(valor_auxilio, 2)))


def calcular_bolsa(renda_familiar):
    # 0 até 1SM --> 800
    # 1SM+ - 2SM --> 600
    # 2SM+ - 3SM --> 400
    # 3SM+       --> 200
    salario_minino = 1320
    if renda_familiar <= salario_minino:
        return 800
    elif renda_familiar <= 2 * salario_minino:
        return 600
    elif renda_familiar <= 3 * salario_minino:
        return 400
    else:
        return 200
    

main()