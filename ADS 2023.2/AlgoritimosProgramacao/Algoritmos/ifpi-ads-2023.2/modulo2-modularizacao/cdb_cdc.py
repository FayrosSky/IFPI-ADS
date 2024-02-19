def calcular_juros_cdb(capital_cdb, taxa_cdb, ano_saque_cdb):
    tempo = ano_saque_cdb - 2023
    juros = juros_compostos(capital_cdb, taxa_cdb, tempo) 

#Calcular Juros CDB
def calcular_juros_cdb(capital_cdb, taxa_cdb, ano_saque_cdb):
    tempo = ano_saque_cdb - 2023
    juros = juros_compostos(capital_cdb, taxa_cdb, tempo)
    return juros

#Calcular Juros CDC
def calcular_juros_cdc(capital_cdc, taxa_cdc, tempo_cdc):
    return(juros_compostos(capital_cdc, taxa_cdc, tempo_cdc))



def juros_compostos(c, i, t):
    motante = c(1 + i/100)**t
    juros = motante - c
    return juros
    
def rs(valor):
    formatado =  'R$ {.:2f}'.format(round(valor, 2))
    return formatado




def main():
    print('********* CDB vs CDC *********')

    #Pedir dados CDB
    capital_cdb = float(input('Valor investido: '))
    taxa_cdb = float(input('Taxa % a.a: '))
    ano_saque_cdb = int(input('Ano Saque: '))

    #Calcular Juros CDB
    juros_cdb = calcular_juros_cdb(capital_cdb, taxa_cdb, ano_saque_cdb)
    valor_receber_cdb = capital_cdb +juros_cdb
    rendimento_percentual_cdb = (juros_cdb / capital_cdb) * 100


    #Monstrar Dados CDB
    print('------- Resumo CDB -------') 
    print(f'Investimento : ${rs(capital_cdb)}')
    print(f'Ganho        : ${rs(juros_cdb)}')
    print(f'A receber    : ${rs(valor_receber_cdb)}')
    print('Rendimento : '{.:2f}'.format(round(rendimento_percentaul_cdb, 2))
    
    print('\n--------- CDC ---------')
    #Pedir dados CDC
    capital_cdc = capital_cdb
    taxa_cdc = float(input("Taxa CDC % a.m.:"))
    tempo_cdc = (ano_saque_cdb - 2023) * 12 #meses


    #Calcular Juros CDC
    juros_cdc = calcular_juros_cdc(capital_cdc, taxa_cdc, tempo_cdc)
    valor_total_apagar = capital_cdc + juros_cdc
    valor_parcela = (valor_total_apagar / tempo_cdc)
    percentual_total = ((juros_cdc / capital_cdc) * 100).format(round(percentual_total, 2)) #CDC: Custo Efetivo Total

    #Mostrar dados CDC
    print('------- RESUMO CDC -------')
    print(f'Valor CDC(Emp.): ${rs(capital_cdc)}')
    print(f'Total a pagar  : ${rs(valor_total_apagar)}')
    print(f'Juros CDC      : ${rs(juros_cdc)}')
    print(f'CET %          : ${rs(percentual_total)}')
    print(f'Parcelas       : ${rs(tempo_cdc)} x ${rs(valor_parcela)}')


    #Calcular Lucro do Banco
    lucro_banco = juros_cdc - juros_cdb











    





main()


