#Tictactoe in Python
print("Hey! Welcome to the game.")
current_board = { '7' : ' ' , '8' : ' ', '9' : ' ',
          '4' : ' ' , '5' : ' ', '6' : ' ',
          '1' : ' ' , '2' : ' ', '3' : ' '
}

board_keys = []

for key in current_board:
    board_keys.append(key)


def show_the_board(board):
    print("Reference Board \t\tGame Board")
    print('|' + '7' + '|' + '8' + '|' + '9' + '|' + "\t \t \t \t" + '|' + board['7'] + '|' + board['8'] + '|' + board['9'] + '|')
    print('-------' + "\t \t \t \t" + '-------')
    print( '|' + '4' + '|' + '5' + '|' + '6' + '|' + "\t \t \t \t" +'|' +board['4'] + '|' + board['5'] + '|' + board['6']+ '|')
    print('-------' +"\t \t \t \t" + '-------')
    print('|' + '1' + '|' + '2' + '|' + '3' + '|' + "\t \t \t \t" + '|' +board['1'] + '|' + board['2'] + '|' + board['3']+ '|')


def logic():
    turn = 'X'
    count = 0

    for i in range(10):
        show_the_board(current_board)
        print("Your turn," + turn + ". Your move?")
        move = input()

        if current_board[move] == ' ':
            current_board[move] = turn
            count +=1
        else:
            print("That place is taken.Choose another.")
            continue

        if count >= 5:
            if current_board['7'] == current_board['8'] == current_board['9'] != ' ': # across the top
                show_the_board(current_board)
                print("\nGame Over.\n")                
                print(" **** " +turn + " is the winner ****")                
                break
            elif current_board['4'] == current_board['5'] == current_board['6'] != ' ': # across the middle
                show_the_board(current_board)
                print("\nGame Over.\n")                
                print(" **** " +turn + " is the winner ****")
                break
            elif current_board['1'] == current_board['2'] == current_board['3'] != ' ': # across the bottom
                show_the_board(current_board)
                print("\nGame Over.\n")                
                print(" **** " +turn + " is the winner ****")
                break
            elif current_board['1'] == current_board['4'] == current_board['7'] != ' ': # down the left side
                show_the_board(current_board)
                print("\nGame Over.\n")                
                print(" **** " +turn + " is the winner ****")
                break
            elif current_board['2'] == current_board['5'] == current_board['8'] != ' ': # down the middle
                show_the_board(current_board)
                print("\nGame Over.\n")                
                print(" **** " +turn + " is the winner ****")
                break
            elif current_board['3'] == current_board['6'] == current_board['9'] != ' ': # down the right side
                show_the_board(current_board)
                print("\nGame Over.\n")                
                print(" **** " +turn + " is the winner ****")
                break 
            elif current_board['7'] == current_board['5'] == current_board['3'] != ' ': # diagonal
                show_the_board(current_board)
                print("\nGame Over.\n")                
                print(" **** " +turn + " is the winner ****")
                break
            elif current_board['1'] == current_board['5'] == current_board['9'] != ' ': # diagonal
                show_the_board(current_board)
                print("\nGame Over.\n")                
                print(" **** " + turn + " is the winner ****")
                break
        
        if count == 9:
            print("\nGame Over.\n")  
            print("It's a tie!")

        if turn == 'X':
            turn = 'O'
        else:
            turn = 'X'
        
    restart = input("Play again? (y/n)")
    if restart == "y" or restart == "Y":
        for key in board_keys:
            current_board[key] = " "

        logic()
    
if __name__ == "__main__":
    logic()