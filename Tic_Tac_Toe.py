import msvcrt as ms
from colorama import Fore, Back, Style, init
from colorama.initialise import reset_all
init()
x_score = 0
o_score = 0
global game

def tie():
    for i in range(len(game)):
        if game[i].count('-') >= 1:
            return False
    return True



def column_equal():
    for col in range(len(game)):
        count = 0
        for row in range(len(game)):
            if game[row][col] == game[0][col]:
                count += 1
            else:
                break
            if count == len(game) and game[0][col]=='X':
                return 1
            elif count == len(game) and game[0][col]=='O':
                return 2


def row_equal():
    for row in range(len(game)):
        if game[row].count(game[row][0]) == len(game) and game[row][0] == 'X':
            return 1
        elif game[row].count(game[row][0]) == len(game) and game[row][0] == 'O':
            return 2


def diagonal_equal():
    count = 0
    for i in range(len(game)):
        if game[i][i] == game[0][0]:
            count += 1
        if count == len(game) and game[0][0] == 'X':
            return 1
        elif count == len(game) and game[0][0] == 'O':
            return 2
    count = 0
    for i in range(len(game)):
        if game[i][len(game)-i-1] == game[0][len(game)-1]:
            count += 1
        if count == len(game) and game[0][len(game)-1]=='X':
            return 1
        elif count == len(game) and game[0][len(game)-1]=='O':
            return 2


def print_game_board():
    print(Fore.CYAN, Style.BRIGHT)
    print("   ", end=" ")
    for i in range(len(game)):
        print(i, end="    ")
    print()
    for i in range(len(game)):
        print(i, end=" ")
        for j in range(len(game[0])):
            print(" ", game[i][j], end="  ")
        print()
    print(Style.RESET_ALL)


def victory_or_defeat():
    if row_equal()==1 or column_equal()==1 or diagonal_equal()==1:
        return 1
    elif row_equal() == 2 or column_equal() == 2 or diagonal_equal() == 2:
        return 2
    elif tie():
        return 4
    else:
        return 3


def position(p1):
    if victory_or_defeat() == 3:

        print("Enter the row and column number where you want to insert",
              p1, "(row col) : ")
        row = int(chr((ms.getch())[0]))
        col = int(chr((ms.getch())[0]))
        print(row, col)

        while row not in range(len(game)) or col not in range(len(game[0])):
            print("Please enter a valid position...")
            print("Enter the row and column number where you want to insert",
                  p1, "(row col) : ")
            row = int(chr((ms.getch())[0]))
            col = int(chr((ms.getch())[0]))
            print(row, col)

        while draw_cross_zero(p1, row, col) == 1:
            print("Enter the row and column number where you want to insert",
                  p1, "(row col) : ")
            row = int(chr((ms.getch())[0]))
            col = int(chr((ms.getch())[0]))
            print(row, col)

        print_game_board()

        if victory_or_defeat() == 1:
            print("X wins!")
            global x_score
            x_score = x_score + 1
        elif victory_or_defeat() == 2:
            print("O wins!")
            global o_score
            o_score = o_score + 1
        elif victory_or_defeat() == 4:
            pass

    elif victory_or_defeat() == 4:
        print("Tie!\n")


def game_play(p1):
    while victory_or_defeat() == 3:
        position(p1)
        if p1 == 'X':
            position('O')
        else:
            position('X')


def draw_cross_zero(choice, row, col):
    if game[row][col] == '-':
        game[row][col] = choice
        return 0
    elif game[row][col] == 'X' or game[row][col] == 'O':
        print("Already occupied...\nPlease enter a different location...\n")
        print_game_board()
        return 1


print(Style.BRIGHT, Fore.LIGHTGREEN_EX +"\t\t\t\t\t\t\t\tTic-Tac-Toe\n")

print("Press any key to continue...\nPress q to quit...")
enter = chr((ms.getch())[0])
print(Style.RESET_ALL)


print("Enter the dimension (row or column) of the Board : ")
size = int(ms.getche())
game = [['-'] * size for i in range(size)]
print()

print_game_board()

print("Enter your choice from X or O : ")
choice = chr((ms.getche())[0])
print()
while enter != 'q':
    while choice != "X" and choice != "O":
        print("Invalid Input...\n")
        choice = chr((ms.getche())[0])
        print()

    print_game_board()
    game_play(choice)
    print("\nSCORE-BOARD\n")
    print(Fore.RED + "\tX :", x_score)
    print("\tO :", o_score)
    print(Style.RESET_ALL)
    print()

    print(Style.BRIGHT, Fore.LIGHTGREEN_EX +"Press any key to continue...\nPress q to quit...\n")
    enter = chr((ms.getch())[0])
    print(Style.RESET_ALL)
    print("Enter the dimension (row or column) of the Board : ")
    size = int(ms.getche())
    game = [['-'] * size for i in range(size)]
    print()
