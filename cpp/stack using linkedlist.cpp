#include<iostream>
using namespace std;

class Node{
public:
  int data;
  Node* next;

  Node(int d){
    data =d;
    next =NULL;
  }
};

class stack{

  public:
  Node* head=NULL;
  
  void push(int data){
    Node* n = new Node(data);
    n->next = head;
    head =n;
  }

  Node* begin(){

    return head;
  }

  void pop(){
    Node* temp = head;
    head = head->next;
    temp->next = NULL;

    delete temp;
  }

  int top(){
    return head->data;
  }

  void botom(int data){

    Node* temp = begin();

    if(!empty()){
      
    }

  }

  bool empty(){

    return (head == NULL);
  }

};

int main(){

  stack s;

  s.push(5);
  s.push(4);
  s.push(3);
  s.push(6);
  s.pop();

  Node* temp = s.begin();

  while(temp!=NULL){
    cout<<temp->data<<" ";
    temp=temp->next;
  }

  return 0;
}
