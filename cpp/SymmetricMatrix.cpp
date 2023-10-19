#include<iostream>
using namespace std;
int main()
{
	int r, c;
	cout << "Enter number of rows:";
	cin >> r;
	cout << "Enter number of columns:";
	cin >> c;
	int** a = new int* [r];
	for (int i = 0; i < r; i++)
		a[i] = new int[c];
  
	cout << "Enter numbers in array:" << endl;
	for (int i = 0; i < r; i++)
	{
		for (int j = 0; j < c; j++)
			cin >> a[i][j];
	}
  
	cout << "Entered matrix:" << endl;
	for (int i = 0; i < r; i++)
	{
		for (int j = 0; j < c; j++)
			cout << a[i][j] << " ";
		cout << endl;
	}
  
  int test = 0;
	for (int i = 0; i < r; i++)
	{
		for (int j = 0; j < c; j++)
		{
			if (a[i][j] != a[j][i])
				test = 1;
		}
	}
	if (test == 0) cout << "Symmetric matrix";
	else cout << "Not symmetric";

	for (int i = 0; i < r; i++)
		delete[] a[i];
	delete[]a;
	a = NULL;
}
