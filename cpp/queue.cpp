#include <iostream>
using namespace std;

struct QNode
{
    int data;
    QNode *next;
    QNode(int dt)
    {
        data = dt;
        next = NULL;
    }
};

struct Queue
{
    QNode *front, *rear;
    Queue()
    {
        front = rear = NULL;
    }

    void enQueue(int x)
    {

        // Create a new LL node
        QNode *temp = new QNode(x);
        if (rear == NULL)
        {
            front = rear = temp;
            return;
        }
        rear->next = temp;
        rear = temp;
    }
    void deQueue()
    {
        if (front == NULL)
            return;
        QNode *temp = front;
        front = front->next;
        if (front == NULL)
            rear = NULL;

        delete (temp);
    }
};

int main()
{

    Queue q;
    q.enQueue(1);
    q.enQueue(2);
    q.deQueue();
    q.deQueue();
    q.enQueue(3);
    q.enQueue(4);
    q.enQueue(5);
    cout << "Queue Front : " << (q.front)->data << endl;
    cout << "Queue Rear : " << (q.rear)->data;
}