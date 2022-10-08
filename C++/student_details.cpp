#include <iostream>
#include <string>
using namespace std;

class Student
{
    private:
        string name;
        int roll;
        int marks;

    public:
        void getDetails();
        void displayDetails();
};

void Student::getDetails()
{
    cout << "Enter the name : ";
    cin >> name;
    cout << "Enter roll number: ";
    cin >> roll;
    cout << "Enter total marks : ";
    cin >> marks;
}

void Student::displayDetails()
{
    cout << "Name: " << name << " Roll Number: " << roll << " Marks: " << marks << endl;
    
}

int main()
{
    int numOfStudents;
    cout << "Enter the number of students : ";
    cin >> numOfStudents;

    if (numOfStudents > 0)
    {
        Student stu[numOfStudents];
        for(int i = 0; i < numOfStudents; i++)
        {
            cout << "\nFor student " << i + 1 << " :" << endl;
            stu[i].getDetails();
        }

        cout << "\n\nDetails of all students: " << endl;
        for(int i = 0; i < numOfStudents; i++)
        {
            stu[i].displayDetails();
        }
    }
    else
    {
        cout << "Please enter a valid number." << endl;
    }
    return 0;
}