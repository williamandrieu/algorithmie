using System;

namespace Projet
{
    class MainClass
    {
        public static void Main(string[] args)
        {


        	TD1 tD1 = new TD1();



            int Addition(int nbr1, int nbr2)
            {

                int nbr3 = nbr1 + nbr2;
                return nbr3;


            }
            void Chiffre09()
            {
                for (int i = 0; i <= 9; i++)
                {

                    Console.Write(i);

                }


            }
            void Alphabet_az()
            {
                for (char i = 'a'; i <= 'z'; i++)
                {
                    //c'est bien
                    Console.Write(i);
                }
            }

            void Alphabet_za()
            {
                for (char i = 'z'; i >= 'a'; i--)
                {
                    //c'est bien
                    Console.Write(i);
                }


            }

            void Alphabet_AZ()
            {
                for (char i = 'A'; i <= 'Z'; i++)
                {
                    //c'est bien
                    Console.Write(i);
                }


            }

            void Transform_AZ(String h)
            {

                Console.Write(h.ToUpper());


            }
            void Transform_az(String h)
            {

                Console.Write(h.ToLower());


            }
            void Suite_az(char z)
            {
                for (char i = z; i <= 'z'; i++)
                {
                    //c'est bien
                    Console.Write(i);
                }
            }
            void Decompose_string(String z)
            {
                z.ToCharArray();

                for (int i = 0; i < z.Length; i++)
                {
                    Console.WriteLine(z[i]);
                }
                
            }
            void Inverse_azAZ(String h){
               
                for (int i = 0; i < h.Length; i++)
                {
                    if(h[i] == char.ToLower(h[i])){
                        Console.Write(char.ToUpper(h[i]));
                    }
                    if (h[i] == char.ToUpper(h[i]))
                    {
                        Console.Write(char.ToLower(h[i]));
                        
                    }

                }
                }

            void river_long(long z)
            {

                for (int i = 0; i < 15; i++)
                {

                    char[] e = z.ToString().ToCharArray();
                    long x = long.Parse("" + e[0]);
                    long y = long.Parse("" + e[1]);
                    long r = 0;
                    long t = 0;
                    long u = 0;
                    if (e.Length == 3)
                    {
                        r = long.Parse("" + e[2]);
                    }
                    if (e.Length == 4)
                    {
                        t = long.Parse("" + e[3]);
                    }
                    if (e.Length == 5)
                    {
                        u = long.Parse("" + e[4]);
                    }
                    z += x + y+ r+t+u;

                    Console.WriteLine(z);
                    

                }
               
            }

            void river_meet(long f,long h){

                river_long(h);

                    char[] e = f.ToString().ToCharArray();
                    long x = long.Parse("" + e[0]);
                    long y = long.Parse("" + e[1]);
                    long r = 0;
                    long t = 0;
                    long u = 0;
                    if (e.Length == 3)
                    {
                        r = long.Parse("" + e[2]);
                    }
                    if (e.Length == 4)
                    {
                        t = long.Parse("" + e[3]);
                    }
                    if (e.Length == 5)
                    {
                        u = long.Parse("" + e[4]);
                    }
                    f += x + y + r + t + u;

                    char[] j = h.ToString().ToCharArray();
                    long q = long.Parse("" + j[0]);
                    long s = long.Parse("" + j[1]);
                    long d = 0;
                    long c = 0;
                    long b = 0;
                    if (j.Length == 3)
                    {
                        d = long.Parse("" + j[2]);
                    }
                    if (j.Length == 4)
                    {
                        c = long.Parse("" + j[3]);
                    }
                    if (j.Length == 5)
                    {
                        b = long.Parse("" + j[4]);
                    }
                    h += q + s + d + c + b;


                    Console.WriteLine(f);
                    Console.WriteLine(h);
                   if (f == h) {
                        Console.WriteLine("coucou "+ h+"  "+ f);
                    }
                }
               

            }




            //Console.WriteLine(Addition(3, 4));
            //Chiffre09();
            //Console.WriteLine(' ');
            //Alphabet_az();
            //Console.WriteLine(' ');
            //Alphabet_za();
            //Console.WriteLine(' ');
            //Alphabet_AZ();
            //Console.WriteLine(' ');
            //Transform_az("Je SuIS UnE PuTe");
            //Console.WriteLine(' ');
            //Transform_AZ("Je SuIS UnE PuTe");
            //Console.WriteLine(' ');
            //Suite_az('a');
            //Console.WriteLine(' ');
            //Decompose_string("Hello World!");
            //Console.WriteLine(' ');
            //Inverse_azAZ("HeLlO World!");
            //Console.WriteLine(' ');
            //river_long(42);
            Console.WriteLine(' ');
            river_meet(51,42);
        }


    }
}




//            void river_meet(long f, long h)
//{



//    char[] e = f.ToString().ToCharArray();
//    long x = long.Parse("" + e[0]);
//    long y = long.Parse("" + e[1]);
//    long r = 0;
//    long t = 0;
//    long u = 0;
//    if (e.Length == 3)
//    {
//        r = long.Parse("" + e[2]);
//    }
//    if (e.Length == 4)
//    {
//        t = long.Parse("" + e[3]);
//    }
//    if (e.Length == 5)
//    {
//        u = long.Parse("" + e[4]);
//    }
//    f += x + y + r + t + u;

//    char[] j = h.ToString().ToCharArray();
//    long q = long.Parse("" + j[0]);
//    long s = long.Parse("" + j[1]);
//    long d = 0;
//    long c = 0;
//    long b = 0;
//    if (j.Length == 3)
//    {
//        d = long.Parse("" + j[2]);
//    }
//    if (j.Length == 4)
//    {
//        c = long.Parse("" + j[3]);
//    }
//    if (j.Length == 5)
//    {
//        b = long.Parse("" + j[4]);
//    }
//    h += q + s + d + c + b;


//    Console.WriteLine(f);
//    Console.WriteLine(h);
//    if (f == h)
//    {
//        Console.WriteLine("coucou " + h + "  " + f);
//    }
//}
               

            //}

