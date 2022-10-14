//Name : Akashdeep-k
//Date : 15/10/2022
//Tic tac toe terminal game
#include <iostream>
#include <stdlib.h>
using namespace std;
void boardPrint(char board[][3]){//printing the match stats
    cout << board[0][0] << " | " << board[0][1] << " | " << board[0][2] << endl;
    cout << "---------" << endl;
    cout << board[1][0] << " | " << board[1][1] << " | " << board[1][2] << endl;
    cout << "---------" << endl;
    cout << board[2][0] << " | " << board[2][1] << " | " << board[2][2] << endl;
}
void choiceInput(char board[][3]){//printing input matrix of valid choices
    (board[0][0] == ' ') ? cout << "1" : cout << " "; cout << " | ";
    (board[0][1] == ' ') ? cout << "2" : cout << " "; cout << " | ";
    (board[0][2] == ' ') ? cout << "3" : cout << " "; cout << endl << "---------" << endl;
    (board[1][0] == ' ') ? cout << "4" : cout << " "; cout << " | ";
    (board[1][1] == ' ') ? cout << "5" : cout << " "; cout << " | ";
    (board[1][2] == ' ') ? cout << "6" : cout << " "; cout << endl << "---------" << endl;
    (board[2][0] == ' ') ? cout << "7" : cout << " "; cout << " | ";
    (board[2][1] == ' ') ? cout << "8" : cout << " "; cout << " | ";
    (board[2][2] == ' ') ? cout << "9" : cout << " "; cout << endl;
}
void replace_symbol(char board[][3], int choice, int i){//adding the symbol to board matrix
    char symbol;
    if (i % 2 == 0)
        symbol = 'X';
    else
        symbol = 'O';
    if (choice == 1){ board[0][0] = symbol;}
    if (choice == 2){ board[0][1] = symbol;}
    if (choice == 3){ board[0][2] = symbol;}
    if (choice == 4){ board[1][0] = symbol;}
    if (choice == 5){ board[1][1] = symbol;}
    if (choice == 6){ board[1][2] = symbol;}
    if (choice == 7){ board[2][0] = symbol;}
    if (choice == 8){ board[2][1] = symbol;}
    if (choice == 9){ board[2][2] = symbol;}
}
bool win_check(char board[][3], int i){//checking if there is a win
    char symbol;
    if (i % 2 == 0)
        symbol = 'X';
    else
        symbol = 'O';
    //rows checking
    if (board[0][0] == symbol && board[0][1] == symbol && board[0][2] == symbol) return true;
    if (board[1][0] == symbol && board[1][1] == symbol && board[1][2] == symbol) return true;
    if (board[2][0] == symbol && board[2][1] == symbol && board[2][2] == symbol) return true;
    //columns checking
    if (board[0][0] == symbol && board[1][0] == symbol && board[2][0] == symbol) return true;
    if (board[0][1] == symbol && board[1][1] == symbol && board[2][1] == symbol) return true;
    if (board[0][2] == symbol && board[1][2] == symbol && board[2][2] == symbol) return true;
    //diagonals checking
    if (board[0][0] == symbol && board[1][1] == symbol && board[2][2] == symbol) return true;
    if (board[0][2] == symbol && board[1][1] == symbol && board[2][0] == symbol) return true;
    //no win
    return false;
}
int main(){
    char board[3][3] = {{' ', ' ', ' '},
                        {' ', ' ', ' '},
                        {' ', ' ', ' '}};
    int choice;//for choice of user to place symbol
    int i = 0;
    while (i < 9){
        system("CLS");
        cout << endl;
        boardPrint(board);
        if (i % 2 == 0)
            cout << "Player 1 Turn (Symbol : X) " << endl << endl;
        else
            cout << "Player 2 Turn (Symbol : O) " << endl << endl;
        choiceInput(board);
        cout << "Enter your choice for the symbol from above matrix : ";
        cin >> choice;
        replace_symbol(board, choice, i);
        if (win_check(board, i)){
            system("CLS");
            cout << endl;
            boardPrint(board);
            if (i % 2 == 0)
                cout << endl << "*** Player 1 Won ***";
            else
                cout << endl << "*** Player 2 Won ***";
            break;
        }
        i++;
    }
    if (i == 9){
        system("CLS");
        cout << endl;
        boardPrint(board);
        cout << "*** Match Draw ***";
    }
    return 0;
}