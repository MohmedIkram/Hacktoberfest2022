bool areRotations(string s1,string s2)
   {
       // Your code here
       if(s1.size()!=s2.size())
       return 0;
       
       s1 =s1+s1;
       if(s1.find(s2) == -1){
           return 0;
       }
       else
       return 1; 
     }
};