﻿using System;
namespace TD_console
{
    public class TD1
    {
        // Faites vos tests dans cette méthode
        public TD1()
        {

        }

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
            Writer("Additionner", "36, 6", "42", Additionner(36, 6).ToString());
            Writer("Chiffre_09", "none", "0123456789", Chiffre_09());
            Writer("Alphabet_az", "none", "abcdefghijklmnopqrstuvwxyz", Alphabet_az());
            Writer("Alphabet_za", "none", "zyxwvutsrqponmlkjihgfedcba", Alphabet_za());
            Writer("Alphabet_AZ", "none", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", Alphabet_AZ());
            Writer("Suite_az", "h", "hijklmnopqrstuvwxyz", Suite_az("h"));
            Writer("Transform_az", "Je sUiS uN StrinG !", "je suis un string !", Transform_az("Je sUiS uN StrinG !"));
            Writer("Transform_AZ", "Je sUiS uN StrinG !", "JE SUIS UN STRING !", Transform_AZ("Je sUiS uN StrinG !"));
            Writer("Inverse_azAZ", "Je sUiS uN StrinG !", "jE SuIs Un sTRINg !", Inverse_azAZ("Je sUiS uN StrinG !"));
            Writer("Decompose_string", "Hello World !", "\nH\ne\nl\nl\no\n \nW\no\nr\nl\nd\n \n!", "\n" + Decompose_string("Hello World !"));
            Writer("River_next", "42", "48", River_next(42).ToString());
            Writer("River_meet", "42, 51", "111", River_meet(42, 51).ToString());
            Writer("River_is_sequence", "42, 574", "False", River_is_sequence(42, 574).ToString());
        }

        public static int Additionner(int a, int b)
        {
            int resultat = 0;
            // Ne rien modifier au dessus de ce commentaire
            resultat = a + b;
            // Ne rien modifier au dessous de ce commentaire
            return resultat;
        }

        public static string Chiffre_09()
        {
            string chiffres = "";
            // Ne rien modifier au dessus de ce commentaire
            for (int i = 0; i <= 9; i++)
            {
                //i.ToString().ToCharArray();
                chiffres += i;
            }
            //chiffres = "0123456789";
            // Ne rien modifier au dessous de ce commentaire
            return chiffres;
        }

        public static string Alphabet_az()
        {
            string alphabet = "";
            // Ne rien modifier au dessus de ce commentaire

            for (char i = 'a'; i <= 'z'; i++)
            {
                alphabet += i;
            }
            // Ne rien modifier au dessous de ce commentaire
            return alphabet;
        }

        public static string Alphabet_za()
        {
            string alphabet = "";
            // Ne rien modifier au dessus de ce commentaire
            for (char i = 'z'; i >= 'a'; i--)
            {
                alphabet += i.ToString();
            }
            // Ne rien modifier au dessous de ce commentaire
            return alphabet;
        }

        public static string Alphabet_AZ()
        {
            string alphabet = "";
            // Ne rien modifier au dessus de ce commentaire
            for (char i = 'A'; i <= 'Z'; i++)
            {
                alphabet += i;
            }
            // Ne rien modifier au dessous de ce commentaire
            return alphabet;
        }

        public static string Suite_az(string c)
        {
            string alphabet = "";
            // Ne rien modifier au dessus de ce commentaire
            c.ToCharArray();
            for (char i = c[0]; i <= 'z'; i++)
            {
                //c'est bien
                alphabet += i ;
            }
            // Ne rien modifier au dessous de ce commentaire
            return alphabet;
        }

        public static string Transform_az(string sentence)
        {
            string newSentence = "";
            // Ne rien modifier au dessus de ce commentaire
            newSentence += sentence.ToLower();
            // Ne rien modifier au dessous de ce commentaire
            return newSentence;
        }



        public static string Transform_AZ(string sentence)
        {
            string newSentence = "";
            // Ne rien modifier au dessus de ce commentaire
            newSentence += sentence.ToUpper();
            // Ne rien modifier au dessous de ce commentaire
            return newSentence;
        }

        public static string Inverse_azAZ(string sentence)
        {
            string newSentence = "";
            // Ne rien modifier au dessus de ce commentaire
            for (int i = 0; i < sentence.Length; i++)
            {
                if (char.IsLower(sentence[i]) || char.IsUpper(sentence[i])){
                    if (char.IsLower(sentence[i]))
                    {
                        char.IsSymbol(sentence[i]);
                        newSentence += char.ToUpper(sentence[i]);

                    }
                if (char.IsUpper(sentence[i]))
                {

                    newSentence += char.ToLower(sentence[i]);
                }
                } else {
                    newSentence += sentence[i];
                }


            }
        
            // Ne rien modifier au dessous de ce commentaire
            return newSentence;
        }

        public static string Decompose_string(string sentence)
        {
            string decompose = "";
            // Ne rien modifier au dessus de ce commentaire


            for (int i = 0; i < sentence.Length; i++)
            {
                if (sentence[i] == sentence[0])
                {
                    decompose += sentence[i];
                
                }
                else
                {
                    decompose += "\n" + sentence[i];
                }

            }
            // Ne rien modifier au dessous de ce commentaire
            return decompose;
        }

        public static long River_next(long n)
        {
            long river = 0;
            // Ne rien modifier au dessus de ce commentaire

            foreach (char a in n.ToString())
            {

                river += long.Parse(a.ToString());
            }
            river += n;





            // Ne rien modifier au dessous de ce commentaire
            return river;
        }

        public static long River_meet(long a, long b)
        {
            long meet = 0;
            // Ne rien modifier au dessus de ce commentaire
            while(a != b)
            {
                if(a < b){
                    a = River_next(a);
                } else if(b < a){
                    b = River_next(b);
                }
               

            }
            meet = b;
            // Ne rien modifier au dessous de ce commentaire
            return meet;
        }
                                            //NB riviere    NB inclus
        public static bool River_is_sequence(long river, long sequence)
        {
            bool isSequence = true;
            // Ne rien modifier au dessus de ce commentaire
            int i = 0;
            while (river != sequence && i < 1000)
            {


                river = River_next(river);
                i++;
                isSequence = false;
            }
            if (river == sequence)
            {
                isSequence = true;
            }
            // Ne rien modifier au dessous de ce commentaire
            return isSequence;
        }
    }
}
//si le nombre fait partie des riviere d'avant 