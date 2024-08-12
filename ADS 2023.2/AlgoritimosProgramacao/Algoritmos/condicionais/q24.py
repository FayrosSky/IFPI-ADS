def main():
    #Input

    a = int(input("Enter the coeficient a of the second degree equation: "))
    b = int(input("Enter the coeficient b of the second degree equation: "))
    c = int(input("Enter the coeficient c of the second degree equation: "))

    #Processing

    roots_value = second_degree_equation(a, b, c)

    #Output

    print(f"The roots of the written equation are: {roots_value} ")



def second_degree_equation(a, b, c):
    if a != 0: 
        delt = b**2 -4*a*c
        if delt > 0 :
            root1 = (-b + delt ** 0.5)/(2*a)
            root2 = (-b - delt ** 0.5)/(2*a)
            return root1, root2
        elif delt == 0:
            roots = (-b + delt ** 0.5)/(2*a)
            return roots
        else:
            print("Não existem raízes reais")
            
main()