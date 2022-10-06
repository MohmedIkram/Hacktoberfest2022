
// CPP Program to find Bridges in a Graph

#include <bits/stdc++.h>
using namespace std;

vector<int> adj[100001];
int vis[100001];
int in[100001];
int low[100001];
int timer = 0;

vector<vector<int>> ans;

void dfs(int node, int par)
{
    vis[node] = 1;
    in[node] = low[node] = timer;
    timer++;

    for (int child : adj[node])
    {
        if (child == par)
            continue;

        if (vis[child] == 1)
        {
            // back edge
            low[node] = min(in[child], low[node]);
        }
        else
        {
            dfs(child, node);

            if (low[child] > in[node])
            {

                vector<int> temp;
                temp.push_back(node);
                temp.push_back(child);
                ans.push_back(temp);
            }

            // forward edge

            low[node] = min(low[child], low[node]);
        }
    }
}

vector<vector<int>> bridges(int n, vector<vector<int>> &conn)
{
    if (n == 2)
    {
        vector<int> temp = {conn[0][0], conn[0][1]};
        ans.push_back(temp);
        return ans;
    }

    for (int i = 0; i < conn.size(); i++)
    {
        adj[conn[i][0]].push_back(conn[i][1]);
        adj[conn[i][1]].push_back(conn[i][0]);
    }

    dfs(0, -1);
    return ans;
}

int main()
{
    int nodes = 4;
    vector<vector<int>> connections{{0,1}, {1,2}, {2,0}, {1,3}};

    vector<vector<int>> result = bridges(nodes, connections);

    cout << "Bridges Connections in the Graph are: ";

    for(int i=0;i<result.size();i++)
    {
        cout << result[i][0] << " " << result[i][1] << endl;
    }
}
