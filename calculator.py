print("Enter an operator(+,-,*,/)")

choice = input('Your choice : ')
if choice in('+','-','*','/','**'):
    num1 = float(input("1st number: "))
    num2 = float(input("2nd number: "))

    if choice == '+':
        print(num1+num2)
    if choice == '-':
        print(num1-num2)
    if choice == '*':
        print(num1*num2)
    if choice == '/':
        print(num1/num2)
    if choice == '**':
        print(num1**num2)
    else:
        print("yay!")




