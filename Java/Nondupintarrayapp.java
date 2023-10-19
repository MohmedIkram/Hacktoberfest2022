public class Nondupintarrayapp {



    /**

     *

     * @param args the command line arguments

     *

     */

    public static void main(String[] args) {



        // TODO code application logic here

        NonDupIntArray a = new NonDupIntArray(5);



        a.insert(5);



        a.insert(6);



        a.insert(2);



        a.insert(2);



        a.insert(9);



        a.display();



        a.delete(3);



        a.display();



        a.delete(3);



        a.display();



    }



}



class NonDupIntArray {



    private int[] ary; // ref to array ary



    private int nElems; // number of data items



    public NonDupIntArray(int max) { // constructor



        this.ary = new int[max];



        this.nElems = 0;



    }



    public int size() {



        return this.ary.length;



    }



    public int find(int value) {



// return the array location of the value. If not found, return -1.

        for (int i = 0; i < this.nElems; i++) {



            if (ary[i] == value) {



                return i;



            }



        }



        return -1;



    }



    public void insert(int value) { // put element into arrray



        if (this.nElems == this.ary.length) {



            System.out.println("Array is full");



            return;



        }



        if (find(value) != -1) {;



            System.out.println("value already exists.");



        } else {



            ary[this.nElems] = value;



            this.nElems++;



        }



    }



    public boolean delete(int location) { //delete value of specific array location



        /*







(Note: you need to validate minimum and maximum location of the array. minimum location is 0)







         */

        if (0 <= location && location < nElems) {



            for (int i = location; i < this.nElems - 1; i++) {



                this.ary[i] = this.ary[i + 1];



            }



            this.nElems--;



            return true;



        } else {



            System.out.println("Input location is out of range");



            return false;



        }



    }



    public void display() { // display array contents



        System.out.println("---value of the array---");



        for (int i = 0; i < this.nElems; i++) {



            System.out.print(this.ary[i] + " ");



        }



        System.out.println(" ");



    }



}

