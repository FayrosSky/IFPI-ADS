#Normal Pyramid
print("\nNormal Pyramidal")
for i in range(6):
    x = '* '
    x = x*i
    print(f'{x: ^10}')
    
#Inverted Pyramid
print("\nInverted Pyramidal")
for i in range(5):
    x = '* '
    x = x*(5-i)
    print(f'{x : ^20}')