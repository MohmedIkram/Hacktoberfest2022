public static void main(String[] args)
 {

  int number[]={7,13,4,5,62,3,1,3,45};

  int temp;
  boolean fixed=false;
  while(fixed==false){
      fixed = true;

  for (int i=0; i <number.length-1;i++){ 
      if (number[i]>number[i+1]){

      temp = number [i+1];

      number[i+1]=number[i];

      number[i]=temp;
      fixed=false;
      }
 }
}
  for (int i=0; i<number.length;i++){
      System.out.println(number[i]);
   }
  }

}