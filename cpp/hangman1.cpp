#include <bits/stdc++.h>
using namespace std;
void begin()
{
    cout<<"*************************\n";
    cout<<"*        Hangman        *\n";
    cout<<"*************************\n";
}
void end()
{
    cout<<"**************************\n";
    cout<<"*                        *\n";
    cout<<"**************************\n";
}
//word dictionary
 string Animal()
 {
    string data[]={"GOAT","COW","ZIBRA","GORILLA","CAT","DOG","LION","TIGER","RAT","MONKEY"};
    srand(time(0));
    return data[rand()%10];
 }
 string Games()
 {
    string data[]={"CRICKET","FOOTBALL","HOCKY","BASEBALL","TENNIS","LUDO","CHESS","CARROM","POOL"};
    srand(time(0));
    return data[rand()%9];
 }
 string Fruits()
 {
    string data[]={"BANANA","APPLE","GRAPES","GUAVA","PAPAYA","KIWI","CHIKOO","ORANGE","MANGO","PEACH"};
    srand(time(0));
    return data[rand()%10];
 }
 string Vegitables()
 {
    string data[]={"POTATO","ONION","CABBAGE","PEAS","BEANS","BRINJAL","TOMATO","CAPCICUM","RADISH","PUMPKIN"};
    srand(time(0));
    return data[rand()%10];
 }
 string Birds()
 {
    string data[]={"DODO","CROW","PEACOCK","HAWK","EAGLE","SPARROW","PIGEON","PARROT","OWL","ROBIN"};
    srand(time(0));
    return data[rand()%10];
 }
 

 string type;//Type of the word will store i.e Animal/Bird/Vegitables ...etc

 string choice()
 {
    srand(time(0));
    string toret;
    switch(rand()%5)
    {
        case 0:
            type="Animal";
            toret= Animal();
            break;
        case 1:
            type="Games";
            toret= Games();
            break;
        case 2:
            type="Fruits";
            toret= Fruits();
            break;
        case 3:
            type="Vegitables";
            toret= Vegitables();
            break;
        case 4:
            type="Birds";
            toret= Birds();
            break;
        default:
            cout<<"Somthing wrong please restart";
            exit(1);
    }
    return toret;
 }
//game graphics
void hangman(int wrong)
{
    int i=wrong;
    int count=0;

    //while(i<=wrong)
    //{
        if(i>=1)
        {
            cout<<"          -- --";
            ++count;
        }
        if(i>=2)
        {
            cout<<"\n            |";
            ++count;
        }
        if(i>=3)
        {
            cout<<"\n            O";
            ++count;
        }
        if(i>=4)
            cout<<"\n           /";
        if(i>=5)
            cout<<"|";
        if(i>=6)
            cout<<"\\";
        if(i>=7)
            cout<<"\n            |";
        if(i>=8)
        {
            cout<<"\n           /";
            ++count;
        }
        if(i==9)
            cout<<" \\\n";

        int newline=7-count;
        while(newline--)
            cout<<"\n";
    cout<<"\n";
}

// Driver program
int main(void)
{
    
    srand(time(0));
    string s=choice();
    string alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    string p;
    for(int i=0;i<s.length();++i)
        p.push_back('_');
    begin();
    cout<<"\n\n\n\n\n\n\n\n\n";
    end();
    cout<<"Guessed Word: ";
    for(int i=0;i<p.length();++i)
        cout<<p[i]<<"  ";
    cout<<"\n\n";
    for(int i=0;i<alpha.length();++i)
        cout<<alpha[i]<<"  ";
    cout<<"\n\n";
    cout<<"Type of word: "<<type<<"\n\n";
    int wrong=0;
    while(wrong!=9)
    {
        char user;
        cout<<"\nEnter your choice: ";
        cin>>user;
        if(find(s.begin(),s.end(),user) != s.end())
        {
            for(int i=0;i<s.length();++i)
                if(s[i]==user)
                    p[i]=user;
        }
        else
            ++wrong;
        cout<<endl;
        *find(alpha.begin(),alpha.end(),user)=' ';
        system("cls");
        
        begin();
        hangman(wrong);
        end();
        cout<<"Guessed Word: ";
        for(int i=0;i<p.length();++i)
            cout<<p[i]<<"  ";
        cout<<"\n\n";
        for(int i=0;i<alpha.length();++i)
            cout<<alpha[i]<<"  ";
        cout<<"\n\n";
        cout<<"Type of word: "<<type<<"\n";
        if(p==s)
        {
            cout<<"\nYOU WIN\n\n";
            break;
        }

    }
    if(wrong == 9 )
        cout<<"You are Hanged"<<"\n\n";
    return 0;
}
