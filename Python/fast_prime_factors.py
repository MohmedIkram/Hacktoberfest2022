from time import time
from sys import platform

os = True if platform=='linux1' or platform=='linux2' else False

red = '\33[91m'
grn = '\33[92m'

s=time()

def p(a):
    k=[2]
    u=[2,3,5,7]
    k=range(1,a,2)
    for i in k:
        print("%.4f" % ((i/a)*100),"% done",end='\r')
        if i!=2 and i!=1 and i%3!=0 and i%5!=0 and i%7!=0:
            u.append(i) 
    return u

num=int(input('Enter a number : '))

print()

k=p(num)

a=[] 

def mul(a):
    b=1
    c=""
    for I in range(len(a)):
        b*=a[I]
        if I==(len(a)-1):
            if os:
                c+=grn+str(a[I])+red+" = "+grn
            else:
                c+=str(a[I])+' = '
        else:
            if os:
                c+=grn+str(a[I])+red+" x "
            else:
                c+=str(a[I])+' x '
    return [b,c]

for i in k:
    if num%i==0:
        a.append(i)

h=mul(a) 

def ses(n):
    n=len(n)
    if n==1:
        print('The number has only 1 prime factor')
    elif n>1:
        print('The number has',n,'prime factors')

if h[0]==num:
    if os:
        print(grn)
    print(num, " is a Product of prime factors") 
    ses(a)
    print("product of prime factors : ",h[1],h[0])
else:
    if os:
        print(red)
    print("The number is not a product of prime factors")
    ses(a)
    print("product of prime factors : ",h[1],h[0])
       

e=time()
t=e-s
ips=num/t
print(red) if os else 0 
print("\nDone in %.3f seconds" % t,"(",int(ips),"numbers per second) ")
