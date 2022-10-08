#program for checking matching paranthesis
class Solution:
    def isValid(self, s: str) -> bool:
        stck=[]
        flag=1
        if(len(s)==0):
            return True
        for i in s:
            if i=='{' or i=='(' or i=='[':
                stck.append(i)
            else:
                if(len(stck)!=0):
                    v=stck.pop()
                else:
                    return False
                #print(i,v)
                if(i=='}'):
                    if(v=='{'):
                        flag=0
                    else:
                        return False
                elif (i==']'):
                    if(v=='['):
                        flag=0
                    else:
                        print("hello")
                        return False
                else:
                    if(v=='('):
                        flag=0
                    else:
                        return False
        if(flag==0 and len(stck)==0):
            return True
           
        