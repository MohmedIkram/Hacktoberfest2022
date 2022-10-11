'''
to extract single valued data type from given list and storing it in a tuple
'''
a=[14,1.2,2+3j,'hello',12]
i=0
su=()
while i<len(a):
    if type(a[i]) in [int,float,complex,bool]:
        print(a[i])
        su+=(a[i],)   
    i+=1
print(su)
