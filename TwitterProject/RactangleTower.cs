using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwitterProject
{
    internal class RactangleTower : Tower
    {
        //private double rib;
        //public double Rib
        //{
        //    get { return rib; }
        //    set { rib = value; }
        //}
        public RactangleTower(double height, double width)
            : base(height, width) { }
        public override void calcScope()
        {
            Console.WriteLine("the RactangleTower scope is : {0}", (base.Width * 2) + (base.Height * 2));
        }
        public void checkBetweenaRctangleToSquare()
        {
            if ((base.Width == base.Height) || (Math.Abs(base.Width - base.Height) > 5))
                Console.WriteLine("the RactangleTower area is : {0}", base.Width * base.Height);
             else
               this.calcScope();

        }
    }
}
