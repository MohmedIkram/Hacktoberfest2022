
using System;
namespace box{
	public class boxing
	{
		public static void Main(string []args)
		{
			string alpha="FCIT";
			object alphabet=alpha;
			alpha="PUCIT";//changing value of object will not change value of value to be boxed and viceversa
			System.Console.WriteLine("alpha= "+alpha);
			System.Console.WriteLine("alphabet= "+alphabet);
	    }
	}
}