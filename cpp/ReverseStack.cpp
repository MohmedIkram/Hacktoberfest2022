#include <iostream>
#include <stack>
using namespace std;

void reverseStack(stack<int> &input, stack<int> &extra) {
     if(input.size()==0||input.size()==1)
         return;
    int x=input.top();
    input.pop();
    reverseStack(input,extra);
    while(!input.empty())
    {
        int a=input.top();
        input.pop();
        extra.push(a);
    }
    input.push(x);
    while(!extra.empty())
    {
        int a=extra.top();
        extra.pop();
        input.push(a);
    }
}

int main() {
    stack<int> input, extra;
    int size;
    cin >> size;

    for (int i = 0, val; i < size; i++) {
        cin >> val;
        input.push(val);
    }

    reverseStack(input, extra);

    while (!input.empty()) {
        cout << input.top() << " ";
        input.pop();
    }
}