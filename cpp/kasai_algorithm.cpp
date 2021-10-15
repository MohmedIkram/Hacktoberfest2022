/*Kasai’s Algorithm is used to get the Longest Common Prefix (LCP) array from suffix array. At first suffix arrays are found. After that Kasai's algorithm takes the suffix array list to find LCP.*/
/*Suffix Array :
5 3 1 0 4 2
Common Prefix Array :
1 3 0 0 2 0*/
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

struct suffix {
   int index;
   int rank[2];    // To store rank pair
};

bool compare(suffix s1, suffix s2) {    //compare suffixes for sort function
   if(s1.rank[0] == s2.rank[0]) {
      if(s1.rank[1] < s2.rank[1])
         return true;
      else
         return false;
   }else {
      if(s1.rank[0] < s2.rank[0])
         return true;
      else
         return false;
   }
}

vector<int> buildSuffixArray(string mainString) {
   int n = mainString.size();
   suffix suffixArray[n];

   for (int i = 0; i < n; i++) {
      suffixArray[i].index = i;
      suffixArray[i].rank[0] = mainString[i] - 'a';     //store old rank
      suffixArray[i].rank[1] = ((i+1)<n)?(mainString[i+1]-'a'):-1; //rank after alphabetical ordering
   }

   sort(suffixArray, suffixArray+n, compare);    //sort suffix array upto first 2 characters
   int index[n];  //index in suffixArray

   for (int k = 4; k < 2*n; k = k*2) {    //increase k as power of 2
      int currRank = 0;
      int prevRank = suffixArray[0].rank[0];
      suffixArray[0].rank[0] = currRank;
      index[suffixArray[0].index] = 0;

      for (int i = 1; i < n; i++) {    // Assigning rank to all suffix
         if (suffixArray[i].rank[0] == prevRank && suffixArray[i].rank[1] == suffixArray[i-1].rank[1]) {
            prevRank = suffixArray[i].rank[0];
            suffixArray[i].rank[0] = currRank;
         } else{    //increment rank and assign
            prevRank = suffixArray[i].rank[0];
            suffixArray[i].rank[0] = ++currRank;
         }
         index[suffixArray[i].index] = i;
      }

      for (int i = 0; i < n; i++) {    // Assign next rank to every suffix
         int nextIndex = suffixArray[i].index + k/2;
         suffixArray[i].rank[1] = (nextIndex < n)? suffixArray[index[nextIndex]].rank[0]: -1;
      }
      sort(suffixArray, suffixArray+n, compare); //sort upto first k characters
   }

   vector<int>suffixVector;
   for (int i = 0; i < n; i++)
      suffixVector.push_back(suffixArray[i].index);    //index of all suffix to suffix vector
      return  suffixVector;
}

vector<int> kasaiAlgorithm(string mainString, vector<int> suffixVector) {
   int n = suffixVector.size();
   vector<int> longPrefix(n, 0);    //size n and initialize with 0
   vector<int> suffixInverse(n, 0);

   for (int i=0; i < n; i++)
      suffixInverse[suffixVector[i]] = i;    //fill values of inverse Suffix list
   int k = 0;
   for (int i=0; i<n; i++) {     //for all suffix in main string
      if (suffixInverse[i] == n-1) {    //when suffix at position (n-1)
         k = 0;
         continue;
      }

      int j = suffixVector[suffixInverse[i]+1];    //nest string of suffix list
      while (i+k<n && j+k<n && mainString[i+k]==mainString[j+k]) //start from kth index
         k++;
      longPrefix[suffixInverse[i]] = k;    // prefix for the current suffix.
      if (k>0)
         k--;    //remofe first character of string
   }
   return longPrefix;
}

void showArray(vector<int> vec) {
   vector<int>::iterator it;

   for (it = vec.begin(); it < vec.end() ; it++)
      cout << *it << " ";
   cout << endl;
}

int main() {
   string mainString = "banana";
   vector<int>suffixArray = buildSuffixArray(mainString);
   int n = suffixArray.size();

   cout<< "Suffix Array : "<<endl;
   showArray(suffixArray);

   vector<int>commonPrefix = kasaiAlgorithm(mainString, suffixArray);

   cout<< "\nCommon Prefix Array : "<<endl;
   showArray(commonPrefix);
}