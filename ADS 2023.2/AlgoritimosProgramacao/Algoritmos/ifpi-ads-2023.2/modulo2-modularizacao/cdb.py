
def calcular_tempo_investimeto(ano):
    tempo = ano - 2023
    return tempo
    
def calcular_juros_cdb(valor_investido, taxa_cdb, tempo_ano): 
    #const juros = valor_investido * (taxa_cdb/100) * tempo
    #const juros = juros_simples(valor_investido, taxa_cdb, tempo)
    #return juros
    return juros_simples(valor_investido, taxa_cdb, tempo_ano)

def calcular_juros_emprestimo(valor, taxa_mes, tempo_meses):
    return juros_compostos(valor, taxa_mes, tempo_meses)

def juros_simples(c, i, t):
    juros = c * (i/100) * t
    return juros

def juros_compostos(c, i, t):
    montante = c(1 + i/100)**t
    juros = montante - c
    return juros

# CDB:Certificado de Depósito Bancário
def main():
    print('****** Simulador de CDB ******')

    valor_investido = float(input('Investir R$: '))
    taxa_cdb = float(input('Taxa Rend. (%): '))
    ano_vencimento = int(input('Ano vencimento(AAAA): '))

    tempo_ano = calcular_tempo_investimeto(ano_vencimento)
    rendimento_cdb = calcular_juros_cdb(valor_investido, taxa_cdb, tempo_ano)

    valor_total_a_sacar = valor_investido + rendimento_cdb
    #percentual_de_ganho = (rendimento_cdb / valor_investido) * 100
    percentual_de_ganho = taxa_cdb * tempo_ano


    print('-------- RESULTADO --------')
    print(f'>> Valor investido: R$ ${valor_investido}')        
    print(f'>> Rendimento     :', '{:.2f}'.format(rendimento_cdb))
    print(f'>> Total a sacar  :', '{:.2f}'.format(valor_total_a_sacar))
    print(f'>> Rendimento (%) :', '{:.2f}'.format(percentual_de_ganho))
    print('----------------------------------------------------------')

    print()
    print('Agora, vamos ver quanto o banco lucra com o seu dinheiro:')
    valor_emprestado = valor_investido
    tempo_meses = tempo_ano * 12
    taxa_mes = float(input('Taxa Mensal (%): '))

    juros_emprestimo = calcular_juros_emprestimo(valor_emprestado, taxa_mes, tempo_meses)
    valor_lucro_banco = juros_emprestimo - rendimento_cdb
    valor_total_emprestimo = valor_emprestado + juros_emprestimo

    print('Total Emprést. (Pago): R${:.2f}'.format(round(valor_total_emprestimo)))
    print(f'Juros Emprest.      : R${:.2f}'.format(round(juros_emprestimo, 2)))
    print(f'Juros CDB           : R$ - {:.2f}'.format(round(rendimento_cdb, 2)))
    print(f'Lucro do Banco      : R$ {:.2f}'.format(round(valor_lucro_bando, 2)))
    print('---------------------------------------------------------------------')

    












main()