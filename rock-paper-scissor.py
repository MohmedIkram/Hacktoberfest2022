#first we'll import random library to generate random numbers for the game

import random




#initiating the values

userWins=0

compWins=0

draw=0




#defining the while loop

while userWins<3 and compWins<3:

    #keep taking the inputs from the user

    user=eval(input("scissor(0), rock(1), paper(2):"))

    comp=random.randint(0,2)




    #Conversion of the number into a string

    if user==0:

        u="scissor"

    elif user==1:

        u="rock"

    else:

        u="paper"




    #Conversions for the computer

    if comp==0:

        c="scissor"

    elif user==1:

        c="rock"

    else:

        c="paper"




#choosing the winners

    if user==(comp+1)%3:

        print("The computer is " +c+" You are "+u+". You won! Congrats!.\n")

        userWins+=1

    elif user==(comp-1)%3:

        print("The computer is " +c+" You are "+u+". You lose... Computer won!.\n")

        compWins+=1

    else:

        print("The match has drawed... Both you and the computer are "+u+".Better try again.\n")

        draw+=1




totalGames=userWins+compWins+draw

print("Game Ended.....    You won ",userWins," times out of",totalGames)
