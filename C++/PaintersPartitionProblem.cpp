int Solution::paint(int A, int B, vector<int> &C) {
    int n=C.size();
    long long int sum1=0;
    for(int i=0;i<n;i++){
        sum1+=C[i];
    }
    long long int low=0,high=sum1*B;
    long long int ans=high;
    while(low<=high){
        long long int mid=(high+low)/2;
        long long int currentsum=0;
        int i=0, a=0;
        while(i<n && a<A ){
            long long int p=C[i];
            p=p*B;
            if(currentsum+p<=mid){
                currentsum+=p;
                i++;
            }
            else{
                currentsum=0;
                a++;
            }
        }
        
        if(a<A){
            high=mid-1;
            ans=min(ans,mid);
        }
        else{
            low=mid+1;
        }
    } 
    return ans% 10000003;
}
