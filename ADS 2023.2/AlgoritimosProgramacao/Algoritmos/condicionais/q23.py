def main():
    #Input
    day1 = int(input("Enter the day of the first date: "))
    month1 = int(input("Enter the month of the first date: "))
    year1 =  int(input("Enter the year of the first date: "))
    

    day2 = int(input("Enter the day of the second date: "))
    month2 = int(input("Enter tha month of the second date:"))
    year2 =  int(input("Enter the year of the first date:"))
    
    

    #Processing
    if year1 > year2:
        print(f"The date 1 is more recent than date 2.")
    elif year2 > year1:
        print(f"The date 2 is more recent than date 1.")
    else:
        if month1 > month2:
            print(f"The date 1 is more recent than date 2.")
        elif month2 > month1:
            print(f"The date 2 is more recent than date 1.")
        else:
            if day1 > day2:
                print(f"The date 1 is more recent than date 2.")
            else:
                print(f"The date 2 is more recent than date 1.")
    #Output

main()