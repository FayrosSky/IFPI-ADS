def main():
#input
valor_mercadoria = float(input("Digite o valor da mercadoria: R$ "))

#Processing
entrada = valor_mercadoria // 3
prestacao = entrada
entrada += valor_mercadoria % 3  # Distribui o resto da divisão entre a entrada e as prestações

#Output
print(f"Valor da entrada: R$ {entrada:.2f}")
print(f"Valor das prestações (cada uma): R$ {prestacao:.2f}")

main()