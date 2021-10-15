####### A Simple Python Calculator #######
####### Made by: Anish Shilpakar (github: juju2181) #######
"""
A Simple Python Calculator that will do addition, subtraction, multiplication, division and modulo operations on two entered numbers.
"""

#function to add two numbers
def addTwoNumbers(x,y):
    return f"Sum of {x} and {y} is {x + y}"
    
#function to subtract two numbers
def subtractTwoNumbers(x,y):
    return f"When you subtract {y} from {x} you will get {x - y}"

#function to multiply two numbers
def multiplyTwoNumbers(x, y):
    return f"Product of {x} and {y} is {x * y}"

#function to divide two numbers
def divideTwoNumbers(x, y):
    if(y == 0):
        print('Error: Cannot divide by zero\nPlease re-enter inputs')
        return
    return f"{x} divided by {y} yields {x / y}"

#function to perform a modulo operation
def moduloTwoNumbers(x, y):
    if(y == 0):
        print('Error: Cannot perform modulus operation by zero\nPlease re-enter inputs')
        return
    return f"{x} modulus {y} is {x % y}"

#main function
def main():
    isCalculating = True
    print('--------- Simple Calculator Made in Python ---------')
    while(isCalculating == True):
        firstNumber = int(input('Enter first number: '))
        secondNumber = int(input('Enter second number: '))
        operation = input('Enter operation (+, -, *, /, %): ')
        if operation == '+':
            print(addTwoNumbers(firstNumber, secondNumber))
        elif operation == '-':
            print(subtractTwoNumbers(firstNumber, secondNumber))
        elif operation == '*':
            print(multiplyTwoNumbers(firstNumber, secondNumber))
        elif operation == '/':
            print(divideTwoNumbers(firstNumber, secondNumber))
        elif operation == '%':
            print(moduloTwoNumbers(firstNumber, secondNumber))
        else:
            print('Sorry, the operation you are trying to perform is an invalid operation')
        continueChoice = input('Do you want to continue? (y/n): ')    
        if continueChoice == 'n':
            isCalculating  = False
            print('Thank you for using this calculator :)')
        print("--------------------------------------------------------")

if __name__ == '__main__':
    main()
    
 print("select operation")
print("1.add")
print("2.subtract")
print("3.multiply")
print("4.division")
choice=input("enter choice 1/2/3/4/: ")
number1=int(input("enter number 1: "))
number2=int(input("enter number 2: "))
if choice == "1":
    
   print(number1 + number2)
elif choice == "2":
    
   print(number1 - number2)
elif choice =="3":
    
   print(number1 * number2)
elif choice == "4":
    
   print(number1 / number2)
else:
    print("invalid")
   
    
