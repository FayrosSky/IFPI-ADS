#Entrada
valor_mercadoria = float(input("Digite o valor da mercadoria: R$ "))

#Processamento
entrada = valor_mercadoria // 3
prestacao = entrada

entrada += valor_mercadoria % 3
prestacao += valor_mercadoria % 3

#Saída
print(f"Valor da entrada: R$ {entrada:.2f}")
print(f"Valor das prestações (cada uma): R$ {prestacao:.2f}")
