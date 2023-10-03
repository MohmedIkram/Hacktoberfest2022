#include <bits/stdc++.h>
using namespace std;

double f(double x){
  return x*x;
}

const int N = 1000 * 1000; // number of steps (already multiplied by 2)
double simpson_integration(double a, double b){
  double h=(b-a)/N;
  double s=f(a)+f(b);
  for (int i=1;i<=N-1;i++){ 
    double x=a+h*i;
    s+=f(x)*((i & 1)?4:2);
  }
  s*=h/3;
  return s;
}

int main() {
ios::sync_with_stdio(false);
cin.tie(0);
double a = 9.0; // Lower limit of the interval
double b = 27.0; // Upper limit of the interval
cout<<"The definite integral of f(x) = x^2 over the interval ["<<a<<", "<<b<<"] is: "<<simpson_integration(a, b)<<"\n";
return 0;
}
