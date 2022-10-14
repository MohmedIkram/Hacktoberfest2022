#include<iostream>
#include<stdlib.h>
using namespace std;

class Nqueen
{
    private:
        int size;
        int solutions;
    
    public:
        //constructor to assign the inital values to the variables of the class N queen
        Nqueen(int s)
        {
            size = s;
            solutions = 0;
        }

        //to assign -1 to all the indices of the positions array
        void assign(int *pos,int n)
        {
            for(int i=0;i<n;i++)
            {
                pos[i] = -1;
            }
        }
        //function to start executing the algorithm of the n queens
        void solve()
        {
            int *positions = (int *)malloc(size*sizeof(int));
            assign(positions,size);

            put_queen(positions,0);
            cout<<"Found "<<solutions<<" solutions"<<endl;
        }
        //function to put queen on the desired places
        void put_queen(int *positions,int target_row)
        {
            if(target_row==size)
            {
                display_chess_Board(positions);
                solutions += 1;
            }
            else
            {
                for(int column = 0;column < size;column++)
                {
                    if(check_place(positions,target_row,column))
                    {
                        positions[target_row]= column;
                        put_queen(positions,target_row+1);
                    }
                }
            }
        }
        //function to check whether the place is fine or not for placing the queen
        bool check_place(int *positions,int occupied_row, int column)
        {
            for(int i=0;i<occupied_row;i++)
            {
                if((positions[i]==column)||(positions[i]-i == column-occupied_row)||(positions[i]+i == column+occupied_row))
                {
                    return false;
                }
            }
            return true;
        }
        // function to display the chess board
        void display_chess_Board(int *positions)
        {
            string s;
            for(int row=0;row<size;row++)
            {
                s = "";
                for(int col = 0;col<size;col++)
                {
                    if(positions[row]==col)
                    {
                        s +="Q ";
                    }
                    else
                    {
                        s+=". ";
                    }
                    
                }
                cout<<s<<endl;
            }
            cout<<endl;
            cout<<endl;
        }
};


int main()
{
    //creating an object of the Nqueen class 
    Nqueen *obj = new Nqueen(4);
    //calling the solve function from the object we have created.
    obj->solve();
    return 0;
}
