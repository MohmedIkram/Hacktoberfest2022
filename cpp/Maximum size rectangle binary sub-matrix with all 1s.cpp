// ---          ---
// | 0 1 1 1 1 0  |
// | 1 1 1 1 0 0  |
// | 1 1 0 1 1 1  |
// | 1 1 1 1 1 0  |
// ---          ---

// Maximum size rectangle binary sub-matrix with all 1s

#include <bits/stdc++.h>
using namespace std;

#define r 4
#define c 4

vector<int> prevSmallest(vector<int> heights, int n)
{
     vector<int> ps(n);
     stack<int> st;

     for (int i = 0; i < n; i++)
     {
          while (!st.empty() && heights[st.top()] >= heights[i])
          {
               st.pop();
          }

          if (st.empty())
          {
               ps[i] = -1;
          }
          else
          {
               ps[i] = st.top();
          }

          st.push(i);
     }

     return ps;
}

vector<int> nextSmallest(vector<int> heights, int n)
{
     vector<int> ns(n);
     stack<int> st;

     for (int i = n - 1; i >= 0; i--)
     {
          while (!st.empty() && heights[st.top()] >= heights[i])
          {
               st.pop();
          }

          if (st.empty())
          {
               ns[i] = -1;
          }
          else
          {
               ns[i] = st.top();
          }

          st.push(i);
     }

     return ns;
}

int area(vector<int> heights)
{
     int n = heights.size();

     vector<int> ps(n);
     vector<int> ns(n);

     ps = prevSmallest(heights, n);
     ns = nextSmallest(heights, n);

     int max_ans = 0;

     for (int i = 0; i < n; i++)
     {
          int curr = (ns[i] - ps[i] - 1) * heights[i]; // Main Formula
          max_ans = max(max_ans, curr);
     }

     return max_ans;
}

int largestArea(vector<vector<int>> &matrix)
{
     if (matrix.size() == 0)
          return 0;
     vector<int> v;
     for (int i = 0; i < matrix[0].size(); i++)
          v.push_back(matrix[0][i]);
     int mx = area(v);
     for (int i = 1; i < matrix.size(); i++)
     {
          for (int j = 0; j < matrix[0].size(); j++)
          {
               if (matrix[i][j] == '0')
                    v[j] = 0;
               else
                    v[j] = v[j] + 1;
          }
          mx = max(mx, area(v));
     }
     return mx;
}

int main()
{
     vector<vector<int>> a{
         {0, 1, 1, 0},
         {1, 1, 1, 1},
         {1, 1, 1, 1},
         {1, 1, 0, 0},
     };

     cout << "Area of maximum rectangle is "
          << largestArea(a) << endl;
     return 0;
}
