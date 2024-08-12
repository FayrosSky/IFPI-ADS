def main():
    #Invert Pyramid
    print("\nInvert Pyramid\n")
    for i in range(5):
        x = '* '
        x = x * (5 - i)
        print(f'{x: ^10}')

    # Left sided Pyramid
    #print("\nLeft sided Pyramid")
    #for i in range(5):
    #    x = '* '
    #    x = x * i
    #    print(f'{x: < 10}')
    
    # Right-sided Pyramid
    print("\nRight-sided Pyramid")
    for i in range(1, 6):
        x = ' ' * (5 - i) + '* ' * i
        print(f'{x:>10}')





main()