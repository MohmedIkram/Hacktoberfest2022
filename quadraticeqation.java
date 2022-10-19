import static java.lang.Math.*;  
public class QuadraticEquationExample2  
{  
//defining a static method that finds the roots of the quadratic equation  
static void calculateRoots(int a, int b, int c)  
{  
//comparing the value of a with 0, if a is 0 then the equation is not quadratic   
if (a == 0)   
{  
System.out.println("The value of a cannot be 0.");  
return;  
}  
//calculating discriminant (d)  
int d = b * b - 4 * a * c;  
double sqrtval = sqrt(abs(d));  
if (d > 0)   
{  
System.out.println("The roots of the equation are real and different. \n");  
System.out.println((double)(-b + sqrtval) / (2 * a) + "\n"+ (double)(-b - sqrtval) / (2 * a));  
}  
else if (d == 0)   
{  
System.out.println("The roots of the equation are real and same. \n");  
System.out.println(-(double)b / (2 * a) + "\n"+ -(double)b / (2 * a));  
}  
// executes if d < 0  
else   
{  
System.out.println("The roots of the equation are complex and different. \n");  
System.out.println(-(double)b / (2 * a) + " + i"+ sqrtval + "\n"+ -(double)b / (2 * a)+ " - i" + sqrtval);  
}  
}  
//main method  
public static void main(String args[])  
{  
//Output 1  
int a = 1, b = 5, c = 2;      
//calling function  
calculateRoots(a, b, c);  
//Output 2: int a=1, b=1, c=1               
//Output 3: int a=1, b=-2, c=1  
}  
}  
