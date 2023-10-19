/*
Create a class named MusicalComposition that contains fields for title, composer, and year written. Include a constructor that requires all three values and an appropriate display function which displays the title, composer and year. The child class NationalAnthem contains an additional field that holds the name of the anthem’s nation. The child class constructor requires a value for this additional field. The child class also contains a display function which displays the title, composer, year and name of the nation. Write a C++ program using virtual function.

*/
#include<iostream>
using namespace std;

class MusicalComposition{
protected:
    string title, composer;
    int year;
public:
    MusicalComposition(){
        cout<<"Enter the title: "<<endl;
        cin>>title;
        cout<<"Enter the composer: "<<endl;
        cin>>composer;
        cout<<"Enter the year: "<<endl;
        cin>>year;
    }
    virtual void display(){
        cout<<"The title is: "<<title<<endl
            <<"The composer is: "<<composer<<endl
            <<"The year is: "<<year<<endl;
    }
};

class NationalAnthem: public MusicalComposition{
    string nation_name;
public:
    NationalAnthem(){
        cout<<"Enter the name of the nation"<<endl;
        cin>>nation_name;
    }
    void display(){
        cout<<"The title is: "<<title<<endl
            <<"The composer is: "<<composer<<endl
            <<"The year is: "<<year<<endl
            <<"The nation is: "<<nation_name<<endl;
    }
};

int main(){
    
    MusicalComposition *ptr;

    NationalAnthem N;

    ptr = &N;
    ptr->display();

    return 0;
}