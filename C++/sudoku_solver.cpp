#include <bits/stdc++.h>
using namespace std;
const int N = 9;
#define rep(i, a, b) for (int i = a; i < b; i++)
bool anyUnassigned(int grid[N][N], int &row, int &col)
{
    for (row = 0; row < N; row++)
        for (col = 0; col < N; col++)
            if (grid[row][col] == 0)
                return false;
    return true;
}
bool isPossible(int num, int grid[N][N], int row, int col)
{
    rep(i, 0, N)
    {
        if (num == grid[row][i])
            return false;
    }
    rep(i, 0, N)
    {
        if (num == grid[i][col])
            return false;
    }
    rep(i, row - (row % 3), row - (row % 3) + 3)
    {
        rep(j, col - (col % 3), col - (col % 3) + 3)
        {
            if (num == grid[i][j])
                return false;
        }
    }
    return true;
}
bool isSudoku(int grid[N][N])
{
    int row, col;
    if (anyUnassigned(grid, row, col))
        return true;
    for (int num = 1; num <= 9; num++)
    {
        if (!isPossible(num, grid, row, col))
            continue;
        grid[row][col] = num;
        // cout<<grid[row][col]<<"\n";
        if (isSudoku(grid))
            return true;
        grid[row][col] = 0;
    }
    return false;
}
int main()
{
    int grid[N][N] = {{0, 3, 0, 0, 0, 0, 6, 5, 0},
                      {0, 5, 6, 0, 4, 0, 7, 0, 0},
                      {4, 2, 0, 0, 0, 0, 3, 8, 0},
                      {0, 6, 0, 0, 0, 4, 8, 0, 0},
                      {0, 0, 9, 0, 2, 0, 0, 7, 0},
                      {1, 0, 0, 8, 0, 0, 2, 0, 6},
                      {0, 0, 5, 7, 0, 0, 0, 0, 1},
                      {0, 0, 0, 2, 0, 0, 0, 3, 0},
                      {0, 0, 7, 0, 5, 6, 0, 2, 0}};

    cout << "\n\n";
    if (isSudoku(grid))
    {
        rep(y, 0, N)
        {
            rep(x, 0, N)
            {
                cout << grid[y][x] << " ";
            }
            cout << "\n";
        }
    }
    else
        cout << "sudoku can't be solved\n";

    return 0;
}
