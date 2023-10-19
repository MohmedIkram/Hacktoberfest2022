#include <bits/stdc++.h>

using namespace std;

long long binpow(long long a, long long b) {
  long long res = 1;
  while (b > 0) {
      if (b & 1)
          res = res * a;
      a = a * a;
      b >>= 1;
  }
  return res;
}
void solve(){
  int a,b;
  cin >> a >> b;
  cout << "The value of a^b is :" << binpow(a,b) << "\n";
}
int main(){
  int t = 1;
  // cin >> t;
  while(t--)  solve();
  return 0;
}
