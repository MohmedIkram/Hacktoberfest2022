# import the necessary modules i-e random and string
import random
import string

print("----------- !!! RANDOM PASSWORD GENERATOR !!! -----------")

# input length of password to generate
inputLength = int(input("Enter the length of password to generate: "))

#define the password characters
lowercase = string.ascii_lowercase
uppercase = string.ascii_uppercase
numbers = string.digits
special_characters = string.punctuation

#combine all the data 
allCharacters = lowercase + uppercase + numbers + special_characters

#use random to randomly pick characters from allCharacters of inputLength
temp  = random.sample(allCharacters, inputLength)

#create the password using join on temp
password = ''.join(temp)

#print the required password
print(f"Here is a password of length {inputLength}: \n{password}\n----------------------------------------------------------")

