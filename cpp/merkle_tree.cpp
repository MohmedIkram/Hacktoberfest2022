#include <iostream>
#include <stdlib.h>
#include <string>
#include <vector>
#include "merkle_header.h"


Merkle_Node *head=nullptr;

using namespace std;

int main(){

string filenames[4]{"Desktop","Bin","Control Panel","Shakti"};

Merkle_Node *Main_Node=new Merkle_Node{head,"Main_Node","Hello This is Root Node"};

head=Main_Node;

for(auto c:filenames){
    
    head->add_child(head,c,"Hello this is "+c);


}


head=head->children[0];

head->add_child(head,"Program Files","Hello this is a Program files in the Desktop.");
head->children[0]->add_child(head->children[0],"Program 1","Hello World This is the Program 1");

cout<<head->children[0]->filename<<endl;

cout<<head->directory->children[0]->filename<<endl;





    return 0;
}