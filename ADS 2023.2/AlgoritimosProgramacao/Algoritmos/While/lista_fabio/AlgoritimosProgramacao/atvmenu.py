import menuutils

def main():
    while True:
        print("Menu:")
        print("1. Gerar vetor N posições, pedir valor padrão")
        print("2. Preencher vetor manualmente item a item")
        print("3. Preencher vetor automaticamente")
        print("4. Mostrar vetor")
        print("5. Transformar vetor: elevar a potência N")
        print("6. Contar: Positivos, Negativos e Zeros")
        print("7. Somatório: De todos, Dos negativos e dos Positivos")
        print("8. Exibir Média e Mediana: De todos, dos Positivos e dos Negativos")
        print("9. Exibir Maior e Menor número")
        print("10. Sortear dois números: um positivo e um negativo")
        print("11. Gerar N grupos e T tamanhos. Não repetir valores")
        print("12. Pedir um novo vetor e verificar se está 100% presente nos números do sistema (e na mesma ordem)")
        print("13. Top N maiores números")
        print("14. Top N menores números")
        print("15. Listar valor médio, e listar números maiores que a Média e Menores que a Média")
        print("16. Somatório da Média dos Números Positivos múltiplos de dois com o produto acumulado dos números negativos pares reduzidos à metade")
        print("17. Ordenar os números em ordem crescente")
        print("18. Ordenar em ordem decrescente")
        print("19. Eliminar números múltiplos de N e M (simultaneamente)")
        print("0. Sair")

        opcao = int(input("Escolha uma opção: "))

        if opcao == 0:
            menuutils.sair()
            break

        elif opcao == 1:
            N = int(input("Digite o valor de N: "))
            valor_padrao = int(input("Digite o valor padrão: "))
            vetor = menuutils.gerar_vetor(N, valor_padrao)

        elif opcao == 2:
            menuutils.preencher_manualmente(vetor)  # Preencher vetor manualmente 

        elif opcao == 3:
            menuutils.preencher_automaticamente(vetor) # Preencher automaticamente
            
        elif opcao == 4:
            menuutils.mostrar_vetor(vetor) # Mostrar vetor
            
        elif opcao == 5:
            expoente = int(input("Digite o valor do expoente: "))
            valor = menuutils.transformar_vetor(vetor, expoente)
            print(valor)
            
        elif opcao == 6:
            positivos, negativos, zeros = menuutils.contar_positivos_negativos_zeros(vetor)
            print("Positivos:", positivos)
            print("Negativos:", negativos)
            print("Zeros:", zeros)

        elif opcao == 7:
            somatorio_total, somatorio_negativos, somatorio_positivos = menuutils.somatorio(vetor)
            print("Somatório total:", somatorio_total)
            print("Somatório negativos:", somatorio_negativos)
            print("Somatório positivos:", somatorio_positivos)

        elif opcao == 8:
            media_total, maiores_total, menores_total, media_positivos, maiores_positivos, menores_positivos, media_negativos, maiores_negativos, menores_negativos = menuutils.calcular_media_mediana(vetor)
            print("Média total:", media_total)
            print("Maiores que a média total:", maiores_total)
            print("Menores que a média total:", menores_total)
            print("Média positivos:", media_positivos)
            print("Maiores que a média positivos:", maiores_positivos)
            print("Menores que a média positivos:", menores_positivos)
            print("Média negativos:", media_negativos)
            print("Maiores que a média negativos:", maiores_negativos)
            print("Menores que a média negativos:", menores_negativos)

        elif opcao == 9:
            maior, menor = utils.maior_menor_numero(vetor)
            print("Maior número:", maior)
            print("Menor número:", menor)

        elif opcao == 10:
            numero_positivo_sorteado, numero_negativo_sorteado = menuutils.sortear_numero(vetor)
            print("Número positivo sorteado:", numero_positivo_sorteado)
            print("Número negativo sorteado:", numero_negativo_sorteado)

        elif opcao == 11:
            N = int(input("Digite o valor de N:"))
            T = int(input("Digite o valor de T:"))
            grupos = menuutils.gerar_grupos(N, T)

        elif opcao == 12:
            novo_vetor = [] #Preencher o novo vetor com os valores fornecidos pelo usuário
            presente = menuutils.verificar_presenca(novo_vetor, vetor)
            if presente:
                print("O vetor está 100% presente nos números do sistema")
            else:
                print("O vetor não está 100% presente nos números do sistema")

        elif opcao == 13:
            N = int(input("Digite o valor e N: "))
            maiores_numeros = menuutils.top_maiores(vetor, N)
            print("Top", N, "maiores números:", maiores_numeros)

        elif opcao == 14:
            N = int(input("Digite o valor de N: "))
            menores_numeros = menuutils.top_menores(vetor, N)
            print("Top", N, "menores números")

        elif opcao == 15:
            media_total, maiores_total, menores_total = menuutils.calcular_media(vetor)
            print("Média total:", media_total)
            print("Maiores que a média total:", maiores_total)
            print("Menores que a média total:", menores_total)

        elif opcao == 16:
            resultado = menuutils.somatorio_media_positivos_produto_negativo(vetor)
            print("Resultado:", resultado)

        elif opcao == 17:
            tipo_ordem = input("Digite o tipo de ordenação (todos, pares, impares, positivos, negativos)")
            vetor_ordenado = menuutils.ordenar_numeros(vetor, tipo_ordem)
            print("Vetor ordenado:", vetor_ordenado)

        elif opcao == 18:
            tipo_ordem = input("Digite o tipo de ordenação (todos, pares, impares, positiovos, negativos, multiplos):")
            vetor_ordenado = menuutils.ordenar_numeros(vetor, tipo_ordem)
            vetor_ordenado.reverse()
            print("Vetor ordenado em ordem decrescente:", vetor_ordenado)

        elif opcao == 19:
            N = int(input("Digite o valor de N:"))
            M = int(int("Digite o valor de M:"))
            vetor_sem_multiplos = menuutils.eliminar_multipos(N, M, vetor)
            print("Vetor sem múltiplos de N e M:", vetor_sem_multiplos)

        elif opcao == 0:
            menuutils.sair()
            break
        else:
            print("Opção inválida. Digite um número válido de 0 a 20.")    

main()