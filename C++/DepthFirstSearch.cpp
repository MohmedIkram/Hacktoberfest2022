#include<bits/stdc++.h>
using namespace std;
#define int long long
const int N = 2e5+5;
const int mod = 1e9+7;
vector<int> graph[N];
int vis[N]; // when you are visiting a graph this will play an important role

void dfs(int v) // writing a recursive code for this sum
{
    vis[v] = 1; // we have processed this node we'll mark this as visited
    for(int j=0 ; j<graph[v].size() ; j++) // calling dfs on the vertex's children
    {
        if(vis[graph[v][j]]) continue; // we'll mark this as visited so that it does not visit the node as in the adjacency
        // list the children will also have the vertex as his children. So to avoid that the vertex does not get visited
        // we use visited array

        dfs(graph[v][j]); // induction part of recursive code
    }
}
main()
{
    ios_base:: sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin>>n; // the number of vertices
    int m;
    cin>>m; // the number of edges
    while(m--)
    {
        int x,y;
        cin>>x>>y;
        graph[x].push_back(y); // graph implementation using array of vectors
        graph[y].push_back(x);
    }
    int connected_components = 0; // number of connected componenets in graph
    for(int i=1 ; i<=n ; i++)
    {
        if(vis[i]) continue; // if the vertex is already visited from previous dfs calls' do not run dfs again
        dfs(i);
        connected_components++;
    }
}
