import random #import necessary module to generate random numbers
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
print("Welcome to the PyPassword Generator!")
nr_letters= int(input("How many letters would you like in your password?\n")) 
nr_symbols = int(input(f"How many symbols would you like?\n"))
nr_numbers = int(input(f"How many numbers would you like?\n"))
str=""
total=nr_letters+nr_numbers+nr_symbols
l,s,n=0,0,0
while len(str)!=total:
  a=random.randint(1,3)
  if(a==1 and l<nr_letters):
    b=random.randint(0,len(letters)-1)
    str=str+letters[b]
    l+=1
  elif(a==2 and s<nr_symbols):
    b=random.randint(0,len(symbols)-1)
    str=str+symbols[b]
    s+=1
  elif(a==3 and n<nr_numbers):
    b=random.randint(0,len(numbers)-1)
    str=str+numbers[b]
    n+=1
print("Here is your password: "+str)
