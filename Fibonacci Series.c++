//// Github username: Ks103
// Aim: C++ Program to print Fibonacci Series using Class.
// Date: 9/10/22

// start coding


#include <bits/stdc++.h>
using namespace std;


class Fibonacci {
public:
	int a, b, c;
	void generate(int);
};

void Fibonacci::generate(int n)
{
	a = 0;
	b = 1;

	cout << a << " " << b;


	for (int i = 1; i <= n - 2; i++) {

		
		c = a + b;
		cout << " " << c;

	
		a = b;
		b = c;
	}
}

// Driver code
int main()
{
	int n = 9;

	Fibonacci fib;
	fib.generate(n);
	return 0;
}
