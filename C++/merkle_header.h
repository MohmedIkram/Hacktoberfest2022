#include <iostream>
#include <stdlib.h>
#include <string>
#include <vector>


using namespace std;


#ifndef _MERKLE_H_
#define _MERKLE_H_

class Merkle_Node{
public:
Merkle_Node *directory;
string filename {};
string data{};
vector <Merkle_Node*> children;





Merkle_Node(Merkle_Node *directory_=nullptr,string filename_="New File",string data_=""): directory{directory_},data{data_},filename{filename_}{}



void add_child(Merkle_Node *source,string filename="",string data=""){

Merkle_Node *child=new Merkle_Node{source,filename,data};
source->children.push_back(child);

cout<<"The child named "<<child->filename<<" is added successfully"<<endl;


}




};



#endif