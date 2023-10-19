#input your string
my_str = input("Enter a string: ") 

# breakdown the string into a list of words  
words = my_str.split() 

# sort the list  
words.sort()  

# display the sorted words  
for word in words:  
    print(word)
input()