from sys import exit

print("\n+==========================================+")
print(" RULE OF THREE")
print("+==========================================+")
first_number = input(" Type the value to A: ")
second_number = input(" Type the value to B: ")
last_number = input(" Type the value to C: ")

if first_number.isnumeric() and second_number.isnumeric() and last_number.isnumeric():
  first_number = float(first_number)
  second_number = float(second_number)
  last_number = float(last_number)
  print("+==========================================+\n")
  print( first_number, " corresponds to ", second_number)
  print( last_number, " corresponds to x")
  print("\n+==========================================+")
  print(" What is the value of x?")
  print("+==========================================+\n")
  print( first_number,"x =",last_number,"*",second_number)
  print( first_number,"x =",last_number * second_number)

  result_of_B_and_C = (last_number * second_number)

  print(" x =", result_of_B_and_C,"/",first_number)

  result = round((last_number * second_number)/first_number, 1)

  print(" x =", result)
  print("\n+==========================================+")
  print(" The value of x is ", result)
  print("+==========================================+\n")
else:
  print("\n+==========================================+")
  print(" ERROR: only numbers are allowed")
  print("+==========================================+")
  exit()