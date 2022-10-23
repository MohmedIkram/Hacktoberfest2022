// C++ program to find minimum number of
// steps to collect stack of coins
#include <bits/stdc++.h>
using namespace std;

// recursive method to collect coins from
// height array l to r, with height h already
// collected
int minStepsRecur(int height[], int l, int r, int h)
{
	// if l is more than r, no steps needed
	if (l >= r)
		return 0;

	// loop over heights to get minimum height
	// index
	int m = l;
	for (int i = l; i < r; i++)
		if (height[i] < height[m])
			m = i;

	/* choose minimum from,
		1) collecting coins using all vertical
		lines (total r - l)
		2) collecting coins using lower horizontal
		lines and recursively on left and right
		segments */
	return min(r - l,
			minStepsRecur(height, l, m, height[m]) +
			minStepsRecur(height, m + 1, r, height[m]) +
			height[m] - h);
}

// method returns minimum number of step to
// collect coin from stack, with height in
// height[] array
int minSteps(int height[], int N)
{
	return minStepsRecur(height, 0, N, 0);
}

// Driver code to test above methods
int main()
{
	int height[] = { 2, 1, 2, 5, 1 };
	int N = sizeof(height) / sizeof(int);

	cout << minSteps(height, N) << endl;
	return 0;
}
// C++ program to find minimum number of
// steps to collect stack of coins
#include <bits/stdc++.h>
using namespace std;

// recursive method to collect coins from
// height array l to r, with height h already
// collected
int minStepsRecur(int height[], int l, int r, int h)
{
	// if l is more than r, no steps needed
	if (l >= r)
		return 0;

	// loop over heights to get minimum height
	// index
	int m = l;
	for (int i = l; i < r; i++)
		if (height[i] < height[m])
			m = i;

	/* choose minimum from,
		1) collecting coins using all vertical
		lines (total r - l)
		2) collecting coins using lower horizontal
		lines and recursively on left and right
		segments */
	return min(r - l,
			minStepsRecur(height, l, m, height[m]) +
			minStepsRecur(height, m + 1, r, height[m]) +
			height[m] - h);
}

// method returns minimum number of step to
// collect coin from stack, with height in
// height[] array
int minSteps(int height[], int N)
{
	return minStepsRecur(height, 0, N, 0);
}

// Driver code to test above methods
int main()
{
	int height[] = { 2, 1, 2, 5, 1 };
	int N = sizeof(height) / sizeof(int);

	cout << minSteps(height, N) << endl;
	return 0;
}
