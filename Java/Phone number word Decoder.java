public class StringToNumbers
{
    private static Scanner input;

    public static void main(String[] args)
    {
        input = new Scanner(System.in);
        System.out.println("Enter The Phone Number (With Letters): ");
        String initial_phone_number = input.nextLine();

        initial_phone_number = initial_phone_number.toUpperCase();
        long phone_number_final = full_number(initial_phone_number);

        System.out.printf("%nOutput phone number for '%s' is '%s'",
                initial_phone_number, phone_number_final);
    }

    public static long full_number(String initial_phone_number)
    {
        // Use long instead of int for 'number' if the string will be longer than max int value
        // 2147483647, which is '10 digits'
        long number = 0;
        int strLen = initial_phone_number.length();


        for (int currCharacter = 0; currCharacter < strLen; currCharacter++) 
        {
            char ch = initial_phone_number.charAt(currCharacter);
            // For A-Z & 0-9, multiply by 10, add the 'char' to number.
            // i.e., Shift existing value to the left by 1 digit, add current 'char' to it
            // Use long instead of int if the string will be longer than max int value (2147483647)

            if (Character.isLetter(ch)) 
            {
                switch(ch)
                {
                case 'A' : case 'B' : case 'C' : number *= 10; number += 2; break;
                case 'D' : case 'E' : case 'F' : number *= 10; number += 3; break;
                case 'G' : case 'H' : case 'I' : number *= 10; number += 4; break;
                case 'J' : case 'K' : case 'L' : number *= 10; number += 5; break;
                case 'M' : case 'N' : case 'O' : number *= 10; number += 6; break;
                case 'P' : case 'Q' : case 'R' : case 'S' : number *= 10; number += 7; break;
                case 'T' : case 'U' : case 'V' : number *= 10; number += 8; break;
                case 'W' : case 'X' : case 'Y' : case 'Z' : number *= 10; number += 9; break;
                }
            }
            else if (Character.isDigit(ch))
            {
                number *= 10; number += Character.getNumericValue(ch);
            }
            else
            {
                System.out.println("Invalid character!");
            }

        } // End of for loop

        // Return actual number only at the end of the function
        return number;

    }// End of full_number function    
}
