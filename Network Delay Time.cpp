/*
LC: 743. Network Delay Time

*/
#include<bits/stdc++.h>
#define ll long long
using namespace std;

class Solution {
public:
    int networkDelayTime(vector<vector<int>>& times, int n, int k) {

        
        vector<pair<int,int>> adj[n + 1];
        
        for(auto &time: times) {
            int u = time[0], v = time[1], w = time[2];
            adj[u].push_back({v, w});
        }
        
        vector<int> vis(n+1, 0);
        vector<int> dist(n+1, 1e9);
        dist[0] = 0;
        dist[k] = 0;
        
        priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq; 
        
        pq.push({0, k});    //  {dist, node}
        
        while(!pq.empty()) {  
            auto p = pq.top(); pq.pop();
            int dis = p.first;
            int node = p.second;

            vis[node] = 1;

            for(auto it: adj[node]) {
                int neighbour = it.first;
                int wt = it.second;

                if(dist[neighbour] > dis + wt && vis[neighbour]==0) {
                    dist[neighbour] = dis + wt;
                    pq.push({dis + wt, neighbour});
                }
            }  
        }
        
        int mx = 0;
        for(int i = 1; i<=n; i++) {
            mx = max(mx, dist[i]);
        }
        if(mx == 1e9) {
            return -1;
        }
        return mx;
    }
};


int main(){
    
    int t; cin >> t;
    while(t--){
        
    }
    return 0;
}
