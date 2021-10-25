/*
Depth First Search algorithm on a graph

Sample Input:
5 4
0 2
0 3
1 4
3 4

*/

#include <bits/stdc++.h>

using namespace std;

void dfs(
    vector<vector<int>> &graph,
    vector<int> &visited,
    int &vertices,
    int currVer,
    vector<int> &path
) {
    if (visited[currVer]) return;
    visited[currVer] = 1;
    path.push_back(currVer);
    for (int &adjVer : graph[currVer]) {
        if (!visited[adjVer]) {
            dfs(graph, visited, vertices, adjVer, path);
        }
    }
}

int main() {
    int vertices, edges;
    cin >> vertices >> edges;
    vector<vector<int>> graph(vertices);
    for (int i = 0; i < edges; i++) {
        int v1, v2;
        cin >> v1 >> v2;
        graph[v1].push_back(v2);
        graph[v2].push_back(v1);
    }
    vector<int> visited(vertices, 0), dfsPath;
    for (int i = 0; i < vertices; i++) {
        dfs(graph, visited, vertices, i, dfsPath);
    }
    for (int &vertex : dfsPath) {
        cout << vertex << " ";
    }
    return 0;
}
