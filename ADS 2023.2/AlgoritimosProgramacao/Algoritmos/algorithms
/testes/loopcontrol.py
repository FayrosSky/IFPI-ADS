def main():
    
    number = int(input("Enter a number: "))
    if number == 1:
        tabuada_1()
    elif number == 2:
        tabuada_2()
    elif number == 3:
        tabuada_3()
    elif number == 4:
        tabuada_4()
    #elif number == 5:
    #    tabuada_5()
    #elif number == 6:
    #    tabuada_6()
    #elif number == 7:
    #    tabuada_7()
    #elif number == 8:
    #    tabuada_8()
    #elif number == 9:
    #   tabuada_9()

def tabuada_1():
    for number in range(1, 10):
        if number == 1:
            continue
        product = number * 1
        print('1 *', number, '=', product)
    print("Loop completed")        

def tabuada_2():
    for number in range(1, 10):
        if number == 2:
            continue
        product = number * 2
        print('2 * ', number, '=', product)
    print("Loop completed")

def tabuada_3():
    for number in range(1, 10):
        if number == 3:
            continue
        product = number * 3
        print('3 *', number, '=', product)
    print("Loop completed")
     
    
def tabuada_4():
    for number in range(1, 10):
        if number == 4:
            continue
        product = number * 4
        print('4 *', number, '=', product)
    print("Loop completed")
        
main()