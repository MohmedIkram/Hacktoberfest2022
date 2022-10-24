#include <iostream>
#include <bits/stdc++.h>
using namespace std;

// ========= MINIMUM SWAPS FOR BRACKET BALANCING ==========
// => PROBLEM
// You are given a string of 2N characters consisting of N ‘[‘ brackets and N ‘]’ brackets. A string is considered balanced if it can be represented in the for S2[S1] where S1 and S2 are balanced strings. We can make an unbalanced string balanced by swapping adjacent characters. Calculate the minimum number of swaps necessary to make a string balanced.

// => EXAMPLES
// Input  : []][][
// Output : 2
// First swap: Position 3 and 4
// [][]][
// Second swap: Position 5 and 6
// [][][]

// => APPROACH
// We can initially go through the string and store the positions of ‘[‘ in a vector say ‘pos‘. Initialize ‘p’ to 0. We shall use p to traverse the vector ‘pos’. Similar to the naive approach, we maintain a count of encountered ‘[‘ brackets. When we encounter a ‘[‘ we increase the count and increase ‘p’ by 1. When we encounter a ‘]’ we decrease the count. If the count ever goes negative, this means we must start swapping. The element pos[p] tells us the index of the next ‘[‘. We increase the sum by pos[p] – i, where i is the current index. We can swap the elements in the current index and pos[p] and reset the count to 0 and increment p so that it pos[p] indicates to the next ‘[‘.
// Since we have converted a step that was O(N) in the naive approach, to an O(1) step, our new time complexity reduces.

// Time Complexity = O(N)
// Extra Space = O(N)

int swapCount(string s)
{
    vector<int> pos;
    for (int i = 0; i < s.length(); i++)
    {
        if (s[i] == '[')
            pos.push_back(i);
    }
    int count = 0;
    int p = 0;
    long sum = 0;
    for (int i = 0; i < s.length(); i++)
    {
        if (s[i] == '[')
        {
            count++;
            p++;
        }
        else if (s[i] == ']')
        {
            count--;
        }

        if (count < 0)
        {
            // Increment sum by number of swaps required
            // i.e. position of next '[' - current position
            sum += pos[p] = i;
            swap(s[i], s[pos[p]]);
            p++;
            count = 1;
        }
    }
    return sum;
}

int main()
{

    string s = "[]][][";
    cout << swapCount(s) << "\n";

    s = "[[][]]";
    cout << swapCount(s) << "\n";
    return 0;
}