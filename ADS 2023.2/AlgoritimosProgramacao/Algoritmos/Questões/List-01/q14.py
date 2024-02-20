def main():
    #Input
    grade1 = float(input("Enter the value of the first grade: "))
    grade2 = float(input("Enter the value of the second grade: "))
    grade3 = float(input("Enter the value of the third grade: "))

    weight_grade1 = int(input("Enter the weight of the grade1: "))
    weight_grade2 = int(input("Enter the weight of the grade2: "))
    weight_grade3 = int(input("Enter the weight of the grade3: "))

    #Processing
    weighted_media = (((grade1 * weight_grade1) + (grade2 * weight_grade2) + (grade3 * weight_grade3)) / (weight_grade1 + weight_grade2 + weight_grade3))
    converted_weighted_media = round(weighted_media, 2)
    
    #Output
    print(f"The weighted media of the grades {weight_grade1}, {weight_grade2}, {weight_grade3} and the weights {weight_grade1}, {weight_grade2}, {weight_grade3} is equal to: {converted_weighted_media}")

main()