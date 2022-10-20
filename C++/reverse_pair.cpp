#include <iostream>
using namespace std;
class node
{
public:
    int data;
    node *next;
    node(int data)
    {
        this->data = data;
        next = NULL;
    }
};
node *creation()
{
    int data;
    cout << "enter the data" << endl;
    cin >> data;
    node *temp;
    node *head = NULL;
    while (data != -1)
    {
        node *newnode = new node(data);
        if (head == NULL)
        {
            head = newnode;
            temp = head;
        }
        else
        {
            temp->next = newnode;
            temp = temp->next;
        }
        cout << "enter the data" << endl;
        cin >> data;
    }
    return head;
}
node* reverse(node *head)
{
    node *temp = NULL;
    node *ptr = NULL;
    node *current = head;
    while (current && current->next != NULL)
    {
        if (temp != NULL)
        {
            temp->next->next = current->next;
        }
        temp = current->next;
        current->next = current->next->next;
        temp->next = current;
        if (ptr == NULL)
        {
            ptr = temp;
        }
        current = current->next;
    }
    return ptr;
}
void display(node *head)
{
    node*temp=head;
    while(temp!=NULL)
    {
        cout<<temp->data<<"->";
        temp=temp->next;
    }
    cout<<"NULL";
}
int main()
{
    node*head=creation();
    head=reverse(head);
    display(head);
}