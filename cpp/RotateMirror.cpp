void rotate(vector<vector<int>>& matrix) {
        
        int n=matrix.size(); // calculating size of matrix
        
                 for(int i=0; i<n; i++){
             for(int j=i; j<n; j++){
                 swap(matrix[i][j], matrix[j][i]);        /* transposing matrix
                 
                 For example:
	1 2 3                                1 4 7
A = 4 5 6       then      A(transpose) = 2 5 8
    7 8 9                                3 6 9
         
    */
	} }
         for(int i=0; i<n; i++){
             for(int j=0; j<n/2; j++){
                 swap(matrix[i][j], matrix[i][n-1-j]);       /* reversing matrix
                    
                     1 4 7                     7 4 1
                 A = 2 5 8  then  A(reverse) = 8 5 2 
                     3 6 9                     9 6 3    
                     
                     */
             }
         } }
