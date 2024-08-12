def main():
    #Input

    password = 1234
    password_entered = int(input("Enter the password: "))

    #Processing

    if password_entered == password:
        print("The password was accepted!")
    else:
        print("The password was denied!")    

    #Output
    
main()