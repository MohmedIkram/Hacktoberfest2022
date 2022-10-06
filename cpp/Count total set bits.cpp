class Solution{
    public:
    // n: input to count the number of set bits
    //Function to return sum of count of set bits in the integers from 1 to n.
    int countSetBits(int n)
    {
        
  int power= 2;
  int mul= 1;
  int ans=0;
  while(1){
      
      ans+= (n/power)*mul;
      
      int extra = n%power;
      
      ans+= max(0, extra-mul+1);
      
    //   cout<<mul<<" "<<ans<<endl;
      
      mul*=2;
power*=2;

if(mul>n)
break;
      
      
  }
        
        
        
     return ans;   
        
        
        
        
    }
};
