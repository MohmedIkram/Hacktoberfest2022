import numpy as np

ROWS = 6
COLUMNS = 7
CONNECT = 4

##############################################################################


def instructions():
    """ 
    Displays the game instructions
    """
    print("\n There are 6 ROWS and 7 COLUMNS indexed from 0")
    print(" Choose a number from 0-6 to drop your piece into a column \n")


def set_board():
    """
    Sets the board to play.
    @returns matrix
    """
    board = np.zeros((ROWS, COLUMNS), dtype="int8")
    return board


def validate_move(col, board):
    """
    Validates the user's move
    @returns boolean
    """
    if(0 <= col <= 6):
        return board[ROWS-1, col] == 0
    else:
        instructions()
        return False


def get_next_row(col, board):
    """
    Gets the next row of the column where a piece can be put.
    @returns int
    """
    for row in range(ROWS):
        if(board[row, col] == 0):
            return row


def drop(col, row, board, piece):
    """
    Sets the place where a piece was put
    """
    board[row, col] = piece


def show_board(board):
    """
    prints the board on screen.
    """
    print(np.flip(board, axis=0))


def check_row(row, board, piece):
    """
    Checks if any user has won in a row.
    @returns boolean
    """
    win = 0
    # print("checking row")
    for c in range(COLUMNS-CONNECT+1):
        for i in range(CONNECT):
            if(board[row, c+i] == piece):
                win += 1
        if(win == CONNECT):
            return True
        win = 0
    return False


def check_col(col, board, piece):
    """
    Checks if any user has won in a column.
    @returns boolean
    """
    win = 0
    # print("checking cols")
    for r in range(ROWS-CONNECT+1):
        for i in range(CONNECT):
            if(board[r + i, col] == piece):
                win += 1
        if(win == CONNECT):
            return True
        win = 0
    return False


def check_diag(row, col, board, piece):
    """
    Checks if any user has won in any of the 2 diagonals.
    @returns boolean
    """
    d1u = 0
    d1d = 0
    d2u = 0
    d2d = 0

    r = row
    c = col
    while(r != 0 and c != 0):
        if(board[r - 1, c - 1] != piece):
            break
        else:
            d1u += 1
        r -= 1
        c -= 1

    r = row
    c = col
    while(r + 1 != ROWS and c + 1 != COLUMNS):
        if(board[r + 1, c + 1] != piece):
            break
        else:
            d1d += 1
        r += 1
        c += 1

    if(d1u + d1d >= CONNECT - 1):
        return True

    r = row
    c = col
    while(r != 0 and c + 1 != COLUMNS):
        if(board[r - 1, c + 1] != piece):
            break
        else:
            d2u += 1
        r -= 1
        c += 1

    r = row
    c = col
    while(r + 1 != ROWS and c != 0):
        if(board[r + 1, c - 1] != piece):
            break
        else:
            d2d += 1
        r += 1
        c -= 1

    if(d2u + d2d >= CONNECT - 1):
        return True

    return False


def win(row, col, board, piece):
    """
    Checks if any user has won.
    @returns boolean
    """
    return (check_col(col, board, piece) or
            check_diag(row, col, board, piece) or
            check_row(row, board, piece))

########################################################################


board = set_board()
game_over = False
turn = 0

print("\t CONNECT 4 \n\n")
instructions()
show_board(board)

while(not game_over):

    if(turn == 0):
        col = int(input("\n Player 1's turn : "))
        if(validate_move(col, board)):
            row = get_next_row(col, board)
            drop(col, row, board, 1)
        else:
            print("\n INVALID MOVE")
    else:
        col = int(input("\n Player 2's turn : "))
        if(validate_move(col, board)):
            row = get_next_row(col, board)
            drop(col, row, board, 2)
        else:
            print("\n INVALID MOVE")
            continue

    if(win(row, col, board, turn+1)):
        print(f"\n CONGRATULATIONS : PLAYER {turn+1} WINS !\n")
        game_over = True

    show_board(board)
    turn = (turn + 1) % 2

###################################################################
########################### END OF CODE ###########################
###################################################################
