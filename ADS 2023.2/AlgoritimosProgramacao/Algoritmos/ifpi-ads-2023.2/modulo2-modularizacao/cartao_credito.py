import math

def rs(valor):
    formatado = 'R${:.2f}'.format(round(valor, 2))
    return formatado
  

def calcular_fatura_futuro(valor, taxa, meses):
    valor_futuro = valor + juros_compostos(valor, taxa, meses)
    return valor_futuro

def juros_compostos(c, i, t):
    montante = pow(c * (1 + i/100), t)
    juros = montante - c
    return juros


def main():
    #Pedir Total Fatura
    fatura_total = float(input("Total Fatura R$: "))

    #Calcular o mínimo (20%)
    fatura_minimo = fatura_total * 0.2

    #Pedir a taxa de juros Mensal do Rotativo
    taxa_rotativo = float(input('Taxa Rotativo % (a.m): '))

    #Exibir valor total e mínimo
    print("----- Detalhes da Fatura -----")
    print(f"Valor Total: ${rs(fatura_total)}")
    print(f"Pag. Mínimo: ${rs(fatura_minimo)}")


    #P1: Perguntar quanto vai pagar e meses
    print('P1 - Plano de Pagamento 1:')
    valor_p1 = float(input('Valor R$:'))
    meses_atraso_p1 = float(input('Meses de atraso: '))

    #P2: Perguntar quanto vai pagar e meses
    print('P2 - plano de pagamento 2:')
    valor_p2 = float(input('Valor R$:'))
    meses_atraso_p2 = int(input('Meses de Atraso:'))

    #Calcular Montante/Fatura P1
    valor_residual_p1 = fatura_total - valor_p1
    fatura_p1 = calcular_fatura_futuro(valor_residual_p1, taxa_rotativo, meses_atraso_p1)

    #Calcular Montante/Fatura P2
    valor_residual_p2 = fatura_total - valor_p2
    fatura_p2 = calcular_fatura_futuro(valor_residual_p2, taxa_rotativo, )  

    #Mostrar Faturas P1 e P2
    print('-------  Plano 1 -------')
    print(f'Valor Pago      : $rs{(valor_p1)}')
    print(f'Valor residual  : ${rs(valor_residual_p1)}')
    print(f'Meses Atraso    : ${meses_atraso_p1}')
    print(f'Fatura em ${meses_atraso_p1} meses será de {rs(fatura_p1)}')


    print('-------  Plano 2 -------')
    print(f'Valor Pago      : ${rs(valor_p2)}')
    print(f'Valor Residual  : ${rs(valor_residual_p2)}')
    print(f'Meses Atraso    : ${meses_atraso_p2}')
    print(f'Fatura em ${meses_atraso_p1} meses será de ${rs(fatura_p2)}')
    
    

main()