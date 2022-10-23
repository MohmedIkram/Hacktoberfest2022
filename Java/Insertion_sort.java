public class Insertion_sort {
    public static void main(String[] args) {
        int []a={4,1,7,9,456,864,3};
        for (int i=0;i<a.length;i++){
            int y=i;
            int t=a[y];
            while (y>0 && t<a[y-1]){
                a[y]=a[y-1];
                y--;
            }
            a[y]=t;
        }
        for (int i:a){
            System.out.print(i+" ");
        }
    }
}
