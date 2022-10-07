/*
A. Java ArrayList class uses a dynamic array for storing the elements. It is like an array, but there is no size limit.
   We can add or remove elements anytime.
B. It inherits the AbstractList class and implements List interface.
C. The important points about Java ArrayList class are:
    1. Java ArrayList class can contain duplicate elements.
    2. Java ArrayList class maintains insertion order.
    3. Java ArrayList class is non synchronized.
    4. Java ArrayList allows random access because array works at the index basis.
    5. In ArrayList, manipulation is little bit slower than the LinkedList in Java because a lot of shifting needs to occur
       if any element is removed from the array list.
D. Hierarchy of ArrayList class
   Java ArrayList class extends AbstractList class which implements List interface. The List interface extends the
   Collection and Iterable interfaces in hierarchical order.

E. Java new generic collection allows you to have only one type of object in a collection. Now it is type safe so typecasting is not required at runtime.
F. In a generic collection, we specify the type in angular braces. Now ArrayList is forced to have the only specified type of objects in it. If you try to add another type of object, it gives compile time error.


 */


import java.util.*;
class ArrayListsImplementation{
    public static void main(String args[]){
        ArrayList<String> list=new ArrayList<String>(); //Creating arraylist  of type string i.e ArrayLists are Generic(forced to have same type elements)

        list.add("Ravi");//Adding object in arraylist
        list.add("Vijay");
        list.add("Ravi");
        list.add("Ajay");
        System.out.println("Simple List");
        System.out.println(list);
        //Traversing list through Iterator
        System.out.println("List using iterator");
        Iterator itr=list.iterator();
        while(itr.hasNext()){
            System.out.println(itr.next());
        }

        // traversing by for-each loop
        System.out.println("List using for-each loop");
        for(String s:list){
            System.out.println(s);
        }

        // get element from given index
        System.out.println("Element at given index");
        System.out.println(list.get(1));

        // set/update/change element from given index
        System.out.println("Update/change/set element at given index");
        System.out.println(list.set(1,"Ansh"));
        System.out.println(list);

        //traverse list by simple loop
        System.out.println("Simple Loop traverse");
        for(int i=0;i<list.size();i++){
            System.out.println(list.get(i));
        }


        // sort the list
        System.out.println("sort list");
        Collections.sort(list);
        System.out.println(list);

        //Traversing list through Iterator in reverse
        System.out.println("Reverse List using iterator");
        ListIterator<String> itr2=list.listIterator(list.size());
        while(itr2.hasPrevious()){
            System.out.println(itr2.previous());
        }

        //Traversing list through foreach loop with lambda function
        System.out.println("list through foreach loop with lambda function");
        list.forEach(a->{System.out.println(a);});

        // adding all elements of a list inside another list
        System.out.println("Add list inside list");
        ArrayList<String> x=new ArrayList<String>();
        x.add("A");
        x.add("B");
        list.addAll(x);
        System.out.println(list);

        // remove element from list
        System.out.println("remove element from list");
        list.remove("A");
        System.out.println(list);

        System.out.println(list.isEmpty());

        System.out.println("insert element in the 2d array list");
        Scanner in=new Scanner(System.in);
        ArrayList<ArrayList<Integer>> arr = new ArrayList<>(); //2d arraylist
        for(int i=0;i<3;i++){
            System.out.println("enter elements for the row ");
            ArrayList<Integer> temp=new ArrayList<>();
            for(int j=0;j<3;j++){
                temp.add(in.nextInt());
            }
            arr.add(temp);
        }
        System.out.println("2d list is : ");
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
                System.out.print(arr.get(i).get(j) + " ");
            }
            System.out.println();
        }




    }
}