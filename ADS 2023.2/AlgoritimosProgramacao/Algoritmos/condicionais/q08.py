def main():
    #Input

    current_day = int(input("Enter the current day: "))
    current_month = int(input("Enter the current month: "))
    current_year = int(input("Enter the current year: "))

    birth_day = int(input("Enter the birth day: "))
    birth_month = int(input("Enter the birth month: "))
    birth_year = int(input("Enter the birth year: "))
 
    #Processing
    exactle_age = calculate_age(current_day, current_month, current_year, birth_day, birth_month, birth_year)
        
    #Outputing
    print(f"The exactle age is: {exactle_age}")



def calculate_age(current_day, current_month, current_year, birth_day, birth_month, birth_year):
    if current_month > birth_month:
        age_year = current_year - birth_day
        return age_year
    elif current_month < birth_month:
        age_year = current_year - birth_day -1
        return age_year
    elif current_month == birth_month:
        if current_day > birth_day or current_day == birth_day:
            age_year = current_year - birth_year
            return age_year
        elif current_day < birth_day:
            age_year = current_year - birth_year -1
            return age_year
        

main()