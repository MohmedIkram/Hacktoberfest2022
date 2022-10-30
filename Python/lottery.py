print("1.100 chances for Rs.1000\n2.50 chances for Rs.500\n3.25 chances for Rs.100\n4.10 chances for Rs.10")
money = int(input("Enter your mood:"))

if money==1:
        x=100
elif money==2:
        x=50
elif money==3:
        x=25
else:
        x=5



for i in range(0,x):
        a=int(input("Enter your choice:"))
        import random
        b=random.randint(1,5)
        if a==b:
                print("You are Harvey Specter")
                print(b)
                #break
        elif a==0:
                print("Thank you participating")
                break
        else:
                print("You are Louis Litt")

print(b)
