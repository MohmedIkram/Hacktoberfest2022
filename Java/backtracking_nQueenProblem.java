import java.util.ArrayList;
import java.util.List;

public class backtracking_nQueenProblem {
    public static boolean isValidPosition(int n,int m,char board[][],ArrayList<ArrayList<String>> allBoardlList){
        //horizontal
        for(int i=0;i<board[0].length;i++){
            if (board[n][i]=='Q'){
                return false;
                // break;
            }
        }

        //vertical
        for(int i=0;i<board[0].length;i++){
            if (board[i][m]=='Q'){
                return false;
                // break;
            }
        }

        //upperLeft
        for(int i=n-1,j=m-1;j>=0 && i>=0;i--,j--){
            if (board[i][j]=='Q'){
                return false;
                // break;
            }
        }

        // upperRight
        for(int i=n-1,j=m+1;j<board.length && i>=0;i--,j++){
            if (board[i][m]=='Q'){
                return false;
                // break;
            }
        }

        //lowerLeft
        for(int i=n+1,j=m-1;j>=0 && i<board.length;i++,j--){
            if (board[i][j]=='Q'){
                return false;
                // break;
            }
        }

        //lowerRight
        for(int i=n+1,j=m+1;j<board.length && i<board.length;i++,j++){
            if (board[i][j]=='Q'){
                return false;
                // break;
            }
        }
        return true;
    }
    public static void createList(char board[][],ArrayList<ArrayList<String>> allBoardList){
        ArrayList<String> list = new ArrayList<>();
        for(int row=0;row<board.length;row++){
            String newString ="";
            for(int col=0;col<board.length;col++){
                if(board[row][col]=='Q'){
                    newString+='Q';
                }
                else{
                    newString+='.';
                }

            }
            list.add(newString);
        }
        allBoardList.add(list);
    }
    int n=4;
    public static char board[][] = new char[4][4];
    public static ArrayList<ArrayList<String>> allBoardList = new ArrayList<>();
    public static void placeQueen(char board[][], ArrayList<ArrayList<String>> allBoardList, int col){
        if(col == board.length){
            createList(board,allBoardList);
        }
        for(int row=0;row<board.length;row++){
            if(isValidPosition(row, col, board, allBoardList)){
                board[row][col] = 'Q';
                placeQueen(board, allBoardList, col+1);
                board[row][col] = '.';
            }
            
        }
    }
    public static void main(String[] args) {
        placeQueen(board, allBoardList, 0);
        System.out.println(allBoardList);
    }
}
