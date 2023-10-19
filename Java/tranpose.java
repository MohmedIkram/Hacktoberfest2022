package com.company;

// matrix is a 2D matrix and res is the transposition of the matrix
public class tranpose {

    public static void mat_tran(int [][] matrix, int [][] res)
    {
        for(int i=0; i< matrix.length; i++)
        {
            for(int j=0; j< matrix.length; j++)
            {
                res[i][j] = matrix[j][i]; // taking the transposition in 'res'
            }
        }
    }

    // this function is for printing the array
    public static void printmat(int [][] arr)
    {
        for(int i=0; i<arr.length; i++)
        {
            for(int j=0; j< arr.length; j++)
            {
                System.out.print(arr[i][j] + " ");
            }
            System.out.print("\n");
        }
    }

    public static void main(String[] args) {
        // write your code here
        int [][] a= {{1,2,3},{4,5,6},{7,8,9}}; // the input array
        int num = a.length;
        int [][] array = new int[num][num];

        System.out.println("Matrix before transpose: ");
        printmat(a);

        mat_tran(a, array);
        System.out.println("Matrix after transpose: ");
        printmat(array);
    }
}

// output will be
/*
    Matrix before transpose:
    1 2 3
    4 5 6
    7 8 9
    Matrix after transpose:
    1 4 7
    2 5 8
    3 6 9
 */
