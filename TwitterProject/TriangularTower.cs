using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwitterProject
{
    
    internal class TriangularTower:Tower
    {
        private double lengthOfRib;
        public double LengthOfRib
        {
            get { return lengthOfRib; }
            set {
                if(value> 0)
                //add takinut
                lengthOfRib = value; }
        }
        public TriangularTower(double height, double width,double lengthOfRi=3)
           : base(height, width)
            //משפט פיטגורס יתן לי את הצלע
        {this.LengthOfRib = lengthOfRib;
        }

        public override void calcScope()
        {
                Console.WriteLine("the TriangularTower scope is : {0}", base.Width  +(this.LengthOfRib*2));
        }
        private void PrintStartTriangular()
        {
            int sumOfLines = Convert.ToInt32(base.Height) - 2;
            int kindOfNumbers = (Convert.ToInt32(base.Width) - 2) / 2;
            int numOfEachNumber = sumOfLines % kindOfNumbers;
            int j=1;
            int i;
            int x;
            Console.WriteLine(sumOfLines);
            Console.WriteLine(kindOfNumbers);


            for (i = 1; i <= base.Height;)
            {
                x = sumOfLines / kindOfNumbers;
               // Console.WriteLine(x + "??");
            //כמה שורות לכל מספר
                if (i == base.Height||i==1)
                        x = 1;
                for (int l = 1; l <= x; l++)
                {
                    if ((i == 2) && (numOfEachNumber != 0))
                    {
                        x += numOfEachNumber;
                        //Console.Write(x + "!!!");
                    }//צריך להדפיס כוכביות
                     // Console.Write(l + " " + "-");
                     //איזה כמות כוכביות עכשיו
                    for (int k = 1; k <= j; k++)
                    {
                        
                        // Console.Write(k + " " + "+");
                        Console.Write("*");


                    }
                    i++;
                    Console.WriteLine();
                }
                j += 2;
            }

               
         


        }

        public void printTheTriangular()
        {
            if((base.Width%2==0)||base.Height*2<this.Width)
                Console.WriteLine("This triangle cannot be printed");
            else
        
            {
                this.PrintStartTriangular();
            }

        }

        
    }
}
