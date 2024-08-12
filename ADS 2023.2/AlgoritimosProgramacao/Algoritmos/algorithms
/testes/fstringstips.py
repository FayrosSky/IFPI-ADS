# ** Python code tip - F-string tricks

car = 'Mercedes'
seats = 5

#Regular print
print(f'{car}, {seats}')

#add equal sign to get variable name also
print(f'{car=}, {seats = }')

#to display your operation 
print(f'{car[:4]=}, {seats * 2 = }')
