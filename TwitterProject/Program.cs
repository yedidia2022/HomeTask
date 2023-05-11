using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwitterProject
{
    internal class Program
    {
        static void Main(string[] args)
        //{
        //    TriangularTower a = new TriangularTower(5, 2, 1);
        //    TriangularTower b = new TriangularTower(5, 12, 1);
        //    a.calcScope();
        //    b.calcScope();
        //    TriangularTower c = new TriangularTower(11, 11, 1);
        //    Console.WriteLine(10 % 3);
        //    c.printTheTriangular();
        //TriangularTower d = new TriangularTower(12, 9, 3);
        //d.printTheTriangular();
        {
            //TriangularTower e = new TriangularTower(12,11, 1);
            int choice = 0;
           
            while (choice != 3) { 
          Console.WriteLine("enter one to Rectangle Tower, two to Triangular Tower, three to exit");
         choice = int.Parse(Console.ReadLine());
                  switch (choice)
                {
                    case 1:
                        Console.WriteLine("enter a Rectangle height");
                        int height=int.Parse(Console.ReadLine());
                        Console.WriteLine("enter a Rectangle width");
                        int width=int.Parse(Console.ReadLine());
                        RactangleTower rec=new RactangleTower(height, width);
                        rec.checkBetweenaRctangleToSquare();
                        break;
                    case 2:
                        Console.WriteLine("enter a Triangular height");
                         height = int.Parse(Console.ReadLine());
                        Console.WriteLine("enter a Triangular width");
                        width = int.Parse(Console.ReadLine());
                        TriangularTower tri = new TriangularTower(height,width);
                        Console.WriteLine("to calc the triangular scope press 1; to print the triangular please press 2!");
                        int option = int.Parse(Console.ReadLine());
                        if (option == 1)
                        {
                            tri.calcScope();
                        }
                        else
                            if(option == 2)
                        {
                            tri.printTheTriangular();
                        }
                        break;
                    case 3:
                        Console.WriteLine("we hope you enjoy");
                        break;
                    default:
                        Console.WriteLine("enter a valid number");
                        break;
                }
                Console.ReadLine();

}

        }

    }
}