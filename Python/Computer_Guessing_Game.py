#3rd Project
print("\n\n------------Write a program that will ask the Computer to guess the correct number----------------\n\n")
print("\n\t\t\t\tThink a number in your mind and the computer to guess it\n\n")

import random

#function definition
def computer_guess(ending_range):
    low=1
    high=ending_range
    user_prompt=""

    while user_prompt!="correct":
        if low!=high:
            guess=random.randint(low,high)
        else:
            guess=low
        user_prompt=input("\nIs the number " + str(guess)+ " is high,low or correct:")
        if user_prompt=="high":
            high=guess-1
        elif user_prompt=="low":
            low=guess+1
    print("\nDone,Guessed correctly!")



ending_range=int(input("Enter the ending range to guess the number from computer:"))
#function call
computer_guess(ending_range)