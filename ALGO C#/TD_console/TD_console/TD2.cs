﻿using System;
namespace TD_console
{
    public class TD2
    {
        // Faites vos tests dans cette méthode
        public TD2()
        {

        }
        TD1 tD1 = new TD1();
        // Ne pas modifier cette méthode
        public static void Writer(string methode, string param, string attendu, string resultat)
        {
            Console.WriteLine("Test " + methode + "(" + param + ");\n"
                              + "Résultat attendu : \"" + attendu + "\";\n"
                              + "Résultat : \"" + resultat + "\";\n"
                              + "Test : " + (string.Equals(attendu, resultat) ? "ok" : "echec") + "\n\n");
        }

        // Ne pas modifier cette méthode
        public static void Test()
        {
            Writer("Alphabet_aZ", "none", "aBcDeFgHiJkLmNoPqRsTuVwXyZ", Alphabet_aZ());
            Writer("Position_az", "Je sUiS uN StrinG, S", "6", Position_az("Je sUiS uN StrinG", 'S').ToString());
            Writer("Replace_az", "Je sUiS uN StrinG, i", "Je sUS uN StrnG", Replace_az("Je sUiS uN StrinG", 'i'));
            Writer("River_max_sequence", "42, 100", "42 ; 48 ; 60 ; 66 ; 78 ; 93 ; 105.", River_max_sequence(42, 100));
            Writer("Conway_next", "1211", "111221", Conway_next("1211"));
            Writer("Conway_is_sequence", "1132121", "False", Conway_is_sequence("1132121").ToString());
            Writer("Conway_n_sequence", "7", "\n1\n11\n21\n1211\n111221\n312211\n13112221", "\n" + Conway_n_sequence(7));
            Writer("Conway_delimiter", "3, 5", "\n21\n1211\n111221", "\n" + Conway_delimiter(3, 5));
            Writer("Pyramide", "3", "\n  /*\\\n /***\\\n/*****\\", "\n" + Pyramide(3));
        }

        public static string Alphabet_aZ()
        {
            string alphabet = "";
            // Ne rien modifier au dessus de ce commentaire
            int z = 1;
            for (char i = 'a'; i <= 'z'; i++)
            {  
                if((z % 2) == 0){

                    alphabet += i.ToString().ToUpper();
                } else {

                    alphabet += i;
                }
                z++;
            }
            // Ne rien modifier au dessous de ce commentaire
            return alphabet;
        }

        public static int Position_az(string sentence, char search)
        {
            int position = 0;
            // Ne rien modifier au dessus de ce commentaire
            while(sentence[position] != search){
                position++;
            }

            // Ne rien modifier au dessous de ce commentaire
            return position;
        }

        public static string Replace_az(string sentence, char search)
        {
            string newSentence = "";
            // Ne rien modifier au dessus de ce commentaire


            for (int i = 0; i < sentence.Length; i++)
            {
                if(sentence[i] == search){

                } else {
                    newSentence += sentence[i];
                }

            }
            // Ne rien modifier au dessous de ce commentaire
            return newSentence;
        }

        public static string River_max_sequence(long river, long max)
        {
            string sequence = "";
            // Ne rien modifier au dessus de ce commentaire

            while (river <= max)
            {

                if (river == 42)
                {
                    sequence += "42 ; ";
                }
                river = TD1.River_next(river);
                if (river < max){

                        sequence += river + " ; ";

                       } else {
                   
                    sequence += river + ".";
                }


            }
            // Ne rien modifier au dessous de ce commentaire
            return sequence;
        }

        public static string Conway_next(string start) //1211 111221
        {
            string conway = "";
            // Ne rien modifier au dessus de ce commentaire
           for (int i = 0; i < start.Length; i++)
            {
                //start[i]

                int count = 1;
                for (int j = i + 1; j < start.Length; j++)
                {
                    //start[j];
                    if (start[i] == start[j])
                    {
                        //incremente
                        count += 1;
                    }
                    else
                    {
                        break;
                    }
                }
                // conway +=
              //  Console.WriteLine("element : " + start[i] + " > count : " + count);
                conway += count.ToString();
                conway += start[i];
                i += count - 1;
            }

            // Ne rien modifier au dessous de ce commentaire
            return conway;
        }

        public static bool Conway_is_sequence(string conway)
        {
            bool isSequence = true;
            // Ne rien modifier au dessus de ce commentaire

            string conway1 = "1";
                  
            while (conway != conway1)

            {
                //Console.WriteLine("=========");
               
                //i++;
                isSequence = false;
                conway1 = Conway_next(conway1);
                if (conway == conway1)
                {
                    isSequence = true;
                    break;
                } else if(int.Parse(conway) < int.Parse(conway1)){
                    break;
                }
            }
            Console.WriteLine(conway);
            // Ne rien modifier au dessous de ce commentaire
            return isSequence;
        }

        public static string Conway_n_sequence(int n)
        {
            string sequences = "";
            // Ne rien modifier au dessus de ce commentaire
            int i = 0;
            string conway = "1";
            while (i < n){

                if(i == n-1){
                    sequences += conway;
                }
                if (!(i == n - 1)){
                    sequences += conway + "\n";
                }
                    


                conway = Conway_next(conway);

                i++;
            }
            // Ne rien modifier au dessous de ce commentaire
            return sequences;
        }

        public static string Conway_delimiter(int min, int max)
        {
            string sequences = "";
            // Ne rien modifier au dessus de ce commentaire


            int i = 0;
            string conway = "1";
            while (i < max)
            {

                if (i == max - 1 && (min <= i) && (i <= max))
                {
                    sequences += conway;
                }
                if (!(i == max - 1) && (min-1 <= i) && (i<= max ))
                {
                    sequences += conway + "\n";
                }



                conway = Conway_next(conway);

                i++;
            }



            // Ne rien modifier au dessous de ce commentaire
            return sequences;
        }

        public static string Pyramide(int height)
        {
            string pyramide = "";
            // Ne rien modifier au dessus de ce commentaire

            int i = 0;
            string e = "*"; 
            //string conway = "1";
            while (i < height)
            {

                if (i == 0)
                {
                    int espace1 = 1;
                    while (espace1 != height)
                    {
                        pyramide += " ";
                        espace1++;

                    }
                    pyramide += "/*\\";
                }
                if (i != 0 )
                {

                    pyramide += "\n";
                    int espace = i+1;
                    while(espace != height){

                        pyramide += " ";
                        espace++;
                        

                    }
                    pyramide += "/";
                    pyramide += e;
                    int t = 0;
                    int l = i+height;
                    while(l >= height){
                        t++;
                        pyramide += e;
                     if((t != 1) && (t % 2 != 0)){
                            pyramide += e;
                        }

                        l--;





                    }
                   
                    pyramide +="\\";
                    //Console.WriteLine(y);
                }



                //conway = Conway_next(conway);

                i++;
            }

            // Ne rien modifier au dessous de ce commentaire
            return pyramide;
        }
    }
}
