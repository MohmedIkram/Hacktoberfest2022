#include <bits/stdc++.h>
#include <string.h>

#define int long long
#define fastio() ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)

#define yes cout<<"YES\n";
#define no cout<<"NO\n";


const int maxi = 1e9 + 7;
// const int MAXN = 1e7 + 1;
void vella() {
    return;
}
void sella() {
    return;
}
void tella() {
    return;
}
using namespace std;

#define pb push_back
#define F first
#define S second
#define sz size()
#define all(V) V.begin(),V.end()
#define rall(V) V.rbegin(),V.rend()
#define take(x) for(auto &y:x) cin>>y;
#define vi vector<int>
#define vvi vector<vector<int>>
#define show(x) for(auto y:x) cout<<y<<" ";

int nxt() {
    int x;
    cin >> x;
    return x;
}

bool prime[10000000+1];
vector<int> pp;
void sieve()
{
    // Create a boolean array "prime[0..n]" and initialize
    // all entries it as true. A value in prime[i] wills
    // finally be false if i is Not a prime, else true.
    int n = 10000000+1;
    memset(prime, true, sizeof(prime));
  
    for (int p = 2; p * p <= n; p++) {
        // If prime[p] is not changed, then it is a prime
        if (prime[p] == true) {
            pp.pb(p);
            // Update all multiples of p greater than or
            // equal to the square of it numbers which are
            // multiple of p and are less than p^2 are
            // already been marked.
            for (int i = p * p; i <= n; i += p)
                prime[i] = false;
        }
    }
    sort(all(pp));
}
void unqVec(vi &v){
    v.erase(unique(all(v)),v.end());
}

//------------------------------------------------------* Template Ends Here *------------------------------------------------------//


/*__________________________________________________________________________________________________________________________________*/
/*__________________________________________________________________________________________________________________________________*/


//---------------------------------------------------------* Actual Code *---------------------------------------------------------//

void solve() {
    int n = nxt();
    int m = nxt();
    string s;
    cin >> s;
    set<int> st1,st2;
    set<pair<int,int>> st;
    for(int i = 0 ; i < n; i++ ){
      if(s[i]=='0') st1.insert(i);
      if(s[i]=='1') st2.insert(i);
    }

    for(int i = 0 ;i  < m; i++) {
      int l = nxt();
      int r = nxt();
      l--;
      r--;
      auto it1 = st1.upper_bound(r);
      auto it2 = st2.upper_bound(l);
      if(it1 == st1.begin()) {st.insert({-1,-1}); continue;}
      if(it2 == st2.begin()) {st.insert({-1,-1}); continue;}
      it1--;
      it2--;
      int x = *it1;
      int y = *it2;
      if(x >= l && x <= r) st.insert({-1,-1});
      else if(y >= l && y <= r) st.insert({-1,-1});
      else st.insert({x,y});
    }

    st.erase({-1,-1});
    cout << st.size();

}
    


signed  main(){ 
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
	 
	// sieve();
    int t = 1;
    t = nxt();
    while(t--) {
        solve();
        cout<<"\n";
    } 
} 
