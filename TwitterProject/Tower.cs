using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwitterProject
{
    internal abstract class Tower
    {
        private double height;
        private double width;
        public double Height
        {
            get { return height; }
            set { if(value>=2)
                    height = value;
                }
        }
        public double Width
        {
            get { return width; }
            set { if(value>0)
                    width = value;
                }
        }
        public Tower(double height,double width)
        {
            this.height = height;
            this.width = width;
        }
        public abstract void calcScope();
       
    }
}
