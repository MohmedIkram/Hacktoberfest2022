#include <bits/stdc++.h>
using namespace std;
#define For(j, i, f) for (int j = i; j <= f; j++)
#define lli long long int
#define endl "\n"
#define vi vector<int>
#define vb vector<bool>
#define vs vector<string>
#define vc vector<char>

// This uses concept of Sieve of eratosthenes to find the smallest prime factors of each number.
// Then this small prime factors is used to determine a number's prime factors.

// spf === Smallest Prime Factor

vi spfSieve(int n) {
  vi spf(n + 1, 0);
  For(x, 2, n) {
    if (spf[x] != 0) continue;
    spf[x] = x;
    for (int y = x * x; y <= n; y += x) {
      if (spf[y]) continue;
      spf[y] = x;
    }
  }
  return spf;
}

void primeFactorization(int n) {
  vi spf = spfSieve(n);
  while (n != 1) {
    cout << spf[n] << " ";
    n /= spf[n];
  }
  cout << endl;
}

int main() {
  int t;
  cin >> t;
  while (t--) {
    int n;
    cin >> n;
    primeFactorization(n);
  }

  return 0;
}