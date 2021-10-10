// Segment tree in cpp

#include<bits/stdc++.h>
using namespace std;
const int MAX = 100005;

int arr[MAX], tree[4*MAX];
void build(int node, int b, int e)
{
    if(b==e){tree[node]=arr[b]; return;}
    int left = node*2;
    int right = node*2 + 1;
    int mid = (b+e)/2;
    build(left, b, mid);
    build(right, mid+1, e);
    tree[node] = tree[left] + tree[right];
}
void update(int node, int b, int e, int i, int newValue)
{
    if(i>e or i<b) return;
    if(b>=i and e<=i) {tree[node] = newValue; return;}
    int left = node*2;
    int right = node*2 + 1;
    int mid = (b+e)/2;
    update(left, b, mid, i, newValue);
    update(right, mid+1, e, i, newValue);
    tree[node] = tree[left] + tree[right];
}
int query(int node, int b, int e, int i, int j)
{
    if(i>e or j<b) return 0;
    if(b>=i and e<=j) return tree[node];
    int left = node*2;
    int right = node*2 + 1;
    int mid = (b+e)/2;
    int ret1 = query(left, b, mid, i, j);
    int ret2 = query(right, mid+1, e, i, j);
    return ret1+ret2;
}
int main()
{
    int n;
    cin>>n;
    for(int i=1; i<=n; i++)
        cin>>arr[i];
    build(1, 1, n);

    cout<<query(1, 1, n, 3, 5)<<endl;       ///find sum 3 to 5
    update(1, 1, n, 4, 7);              ///update 4th element with value 7
    cout<<query(1, 1, n, 3, 5)<<endl;       ///find sum 3 to 5
    return 0;
}
