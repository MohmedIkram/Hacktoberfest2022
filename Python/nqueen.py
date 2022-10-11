print ("Enter the number of queens :")
N = int(input())
chess_board = [[0]*N for i in range(N)]

def attack(i, j):
    for k in range(0,N):
        if chess_board[i][k]==1 or chess_board[k][j]==1:
            return True
    for k in range(0,N):
        for l in range(0,N):
            if (k+l==i+j) or (k-l==i-j):
                if chess_board[k][l]==1:
                    return True
    return False

def Queen(n):
    if n==0:
        return True
    for i in range(0,N):
        for j in range(0,N):
            if (not(attack(i,j))) and (chess_board[i][j]!=1):
                chess_board[i][j] = 1
                if Queen(n-1)==True:
                    return True
                chess_board[i][j] = 0
    return False
Queen(N)
for i in chess_board:
    print (i)