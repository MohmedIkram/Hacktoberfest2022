#include <bits/stdc++.h>
using namespace std;
#define For(j, i, f) for (int j = i; j <= f; j++)
#define lli long long int
#define endl "\n"
#define vi vector<int>
#define vvi vector<vector<int>>
#define vb vector<bool>
#define vs vector<string>
#define vc vector<char>
#define pb push_back
#define foreach(x, arr) for (auto x : arr)

int minStepSnakeLadder(map<int, int> ladder, map<int, int> snake) {
  queue<int> pos;
  vector<bool> visited(101, false);
  pos.push(1);
  visited[1] = true;
  int steps = 0;
  while (!pos.empty()) {
    int n = pos.size();
    steps++;
    while (n--) {
      int curr = pos.front();
      pos.pop();
      // cout << "Current position : " << curr << endl;
      for (int die = 1; die <= 6; die++) {
        int newPos = curr + die;
        if (newPos == 100) return steps;
        if (newPos > 100) break;
        visited[newPos] = true;
        if (ladder[newPos] and ladder[newPos] <= 100) {
          newPos = ladder[newPos];
          visited[newPos] = true;
        }
        if (snake[newPos] and snake[newPos] <= 100) {
          newPos = snake[newPos];
          visited[newPos] = true;
        }
        if (newPos == 100) return steps;
        pos.push(newPos);
      }
    }
  }
  return -1;
}

int main() {
  int l, s;
  map<int, int> ladder;
  map<int, int> snake;
  cin >> l;
  For(i, 0, l - 1) {
    int x, y;
    cin >> x >> y;
    ladder[x] = y;
  }
  cin >> s;
  For(i, 0, s - 1) {
    int x, y;
    cin >> x >> y;
    snake[x] = y;
  }
  cout << "Minimum no of steps : " << minStepSnakeLadder(ladder, snake) << endl;
  return 0;
}