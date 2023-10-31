#include <iostream>

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

// Function to reverse a singly linked list
Node* reverseLinkedList(Node* head) {
    Node* prev = nullptr;
    Node* current = head;
    Node* next = nullptr;

    while (current != nullptr) {
        next = current->next;  // Store the next node
        current->next = prev;  // Change the current node's next to the previous node
        prev = current;       // Move the previous pointer to the current node
        current = next;       // Move the current pointer to the next node
    }

    return prev;  // New head of the reversed list
}

// Function to print a linked list
void printLinkedList(Node* head) {
    Node* current = head;
    while (current != nullptr) {
        std::cout << current->data << " -> ";
        current = current->next;
    }
    std::cout << "nullptr" << std::endl;
}

int main() {
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);

    std::cout << "Original linked list: ";
    printLinkedList(head);

    head = reverseLinkedList(head);

    std::cout << "Reversed linked list: ";
    printLinkedList(head);

    return 0;
}
