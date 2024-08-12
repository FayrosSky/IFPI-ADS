def main():
    #Input
    radius = float(input("Enter the value of the sphere radius: "))

    #Processing
    volume_sphere = (4 * 3.14 * radius ** 3)/3
    rounded_volume_sphere = round(volume_sphere, 2) 

    #Output
    print(f"The volume of the sphere of radius equal to {volume_sphere} is equal to: {rounded_volume_sphere} v.u")

main()