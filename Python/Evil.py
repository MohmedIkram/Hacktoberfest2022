num=int(input("Enter a number:"))
one_c=0
while num!=0:
    if num%2==1:
        one_c+=1
    num//=2
if one_c%2==0:
    print("It is an Evil Number.")
else:
   print("It is Not an Evil Number.")
