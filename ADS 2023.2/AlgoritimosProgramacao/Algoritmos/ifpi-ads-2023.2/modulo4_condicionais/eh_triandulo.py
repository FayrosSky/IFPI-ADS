def main():
    lado_a = float(input('A: '))
    lado_b = float(input('B: '))
    lado_c = float(input('C: '))
    
    if (eh_triangulo(lado_a, lado_b, lado_c)):
        
    

def eh_triangulo(a, b, c):
#Opção 1:
#if (a <= b + c) and (b <= a + c) and (c <= a + b) :
#    return True
#else:
#    return False
    
#Opção 2:
return (a <= b + c) and (b <= a + c) and (c <= a + b)


main()