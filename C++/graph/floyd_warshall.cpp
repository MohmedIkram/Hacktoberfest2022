#include <iostream>

using namespace std;

constexpr int kGraphSize = 5;
constexpr int kInf = 10000;

void floydWarshall(int graph[kGraphSize][kGraphSize], int out[kGraphSize][kGraphSize])
{
    for (int i = 0; i < kGraphSize; i++)
        for (int j = 0; j < kGraphSize; j++)
            out[i][j] = graph[i][j];

    for (int k = 0; k < kGraphSize; k++)
    {
        for (int i = 0; i < kGraphSize; i++)
        {
            for (int j = 0; j < kGraphSize; j++)
            {
                out[i][j] = min(out[i][j], out[i][k] + out[k][j]);
            }
        }
    }
}

int main()
{
    int graph[kGraphSize][kGraphSize] =
        {{0, 3, kInf, kInf, 2},
         {kInf, 0, 3, kInf, 4},
         {1, kInf, 0, 1, 3},
         {kInf, 2, kInf, 0, kInf},
         {4, 5, kInf, kInf, 0}};
    int result[kGraphSize][kGraphSize];
    floydWarshall(graph, result);
    return 0;
}
