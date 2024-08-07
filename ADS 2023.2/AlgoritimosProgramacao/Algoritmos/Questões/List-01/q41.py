def main():
# Entrada
quantidade_latão = float(input("Digite a quantidade de latão (em kg): "))

# Processamento
quantidade_cobre = quantidade_latão * 0.70
quantidade_zinco = quantidade_latão * 0.30

# Saída
print(f"Quantidade de cobre: {quantidade_cobre:.2f} kg")
print(f"Quantidade de zinco: {quantidade_zinco:.2f} kg")

main()