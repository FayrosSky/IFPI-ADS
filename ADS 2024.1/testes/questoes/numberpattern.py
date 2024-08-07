def pattern_2(rows):
    for i in range(1, rows + 1):
        for j in range(1, i + 1):
            print(j, end=' ')
        print('\r')

#Driver Code
n = 10
#To take input from user
n = eval(input("Enter  the number of rows: "))
pattern_2(n)


