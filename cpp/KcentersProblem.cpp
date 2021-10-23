
#include <bits/stdc++.h>
using namespace std;

int maxindex(int* dist, int n)
{
	int mi = 0;
	for (int i = 0; i < n; i++) {
		if (dist[i] > dist[mi])
			mi = i;
	}
	return mi;
}

void selectKcities(int n, int weights[4][4], int k)
{
	int* dist = new int[n];
	vector<int> centers;
	for (int i = 0; i < n; i++) {
		dist[i] = INT_MAX;
	}

	int max = 0;
	for (int i = 0; i < k; i++) {
		centers.push_back(max);
		for (int j = 0; j < n; j++) {

			dist[j] = min(dist[j], weights[max][j]);
		}

		max = maxindex(dist, n);
	}

	cout << endl << dist[max] << endl;

	for (int i = 0; i < centers.size(); i++) {
		cout << centers[i] << " ";
	}
	cout << endl;
}

