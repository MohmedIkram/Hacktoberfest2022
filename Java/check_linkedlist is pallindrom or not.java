import java.util.Scanner;
class Node {
  int data;
  Node next;
  Node(){}
  Node(int d) {
    data=d;
  }
}
class Result {
  static int checkPalindrome(Node head) {
int num=0;
    if(head==null)
      return 0;
    Node curr=head;
    while(curr!=null)
    {
      num=num*10+curr.data;
      curr=curr.next;
    }
    int n=0;
    int temp=num;
    while(temp!=0)
    {
      n=n*10+temp%10;
      temp/=10;
    }
    if(num==n)
      return 1;
    else
      return 0;
  }
}



class Main
{
  static Node insertEnd(Node head, int data)
  {
    Node newLink = new Node(data);
    Node last = head;
    newLink.next = null;   // link new node to NULL as it is last node
    if (head == null)  // if list is empty add in beginning.
    {
      head = newLink;
      return head;
    }
    while (last.next != null)  // Find the last node
      last = last.next;
    last.next = newLink;  // Add the node after the last node of list
    return head;
  }

  static void forwardPrint(Node head)
  {
    Node current = head; // start at beginning of list
    while(current != null) // until end of list,
    {
      System.out.print(current.data + " "); // print data
      current = current.next; // move to next link
    }
  }
  public static void main(String[] args)
  {
    int t,n,m,x;
    Scanner s = new Scanner(System.in);
    t=Integer.parseInt(s.nextLine().trim());
    while(t>0)
    {
      Node head = null;
      int ans;
      n = s.nextInt();
      while(n>0)
      {
        m = s.nextInt();
        head = insertEnd(head, m);
        n--;
      }
      ans = Result.checkPalindrome(head);
      System.out.println(ans);
      t--;
    }
  }
}
