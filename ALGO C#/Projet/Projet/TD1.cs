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
            Writer("River_long", "42", "48", River_long(42).ToString());
            Writer("River_meet", "42, 51", "111", River_meet(42, 51).ToString());
            Writer("River_is_sequence", "42, 574", "False", River_is_sequence(42, 574).ToString());
        }

        public static int Additionner(int a, int b)
        {
            int resultat = 0;
            // Ne rien modifier au dessus de ce commentaire

            // Ne rien modifier au dessous de ce commentaire
            return resultat;
        }

        public static string Chiffre_09()
        {
            string chiffres = "";
            // Ne rien modifier au dessus de ce commentaire

            // Ne rien modifier au dessous de ce commentaire
            return chiffres;
        }

        public static string Alphabet_az()
        {
            string alphabet = "";
            // Ne rien modifier au dessus de ce commentaire

            // Ne rien modifier au dessous de ce commentaire
            return alphabet;
        }

        public static string Alphabet_za()
        {
            string alphabet = "";
            // Ne rien modifier au dessus de ce commentaire

            // Ne rien modifier au dessous de ce commentaire
            return alphabet;
        }

        public static string Alphabet_AZ()
        {
            string alphabet = "";
            // Ne rien modifier au dessus de ce commentaire

            // Ne rien modifier au dessous de ce commentaire
            return alphabet;
        }

        public static string Suite_az(string c)
        {
            string alphabet = "";
            // Ne rien modifier au dessus de ce commentaire

            // Ne rien modifier au dessous de ce commentaire
            return alphabet;
        }

        public static string Transform_az(string sentence)
        {
            string newSentence = "";
            // Ne rien modifier au dessus de ce commentaire

            // Ne rien modifier au dessous de ce commentaire
            return newSentence;
        }



        public static string Transform_AZ(string sentence)
        {
            string newSentence = "";
            // Ne rien modifier au dessus de ce commentaire

            // Ne rien modifier au dessous de ce commentaire
            return newSentence;
        }

        public static string Inverse_azAZ(string sentence)
        {
            string newSentence = "";
            // Ne rien modifier au dessus de ce commentaire

            // Ne rien modifier au dessous de ce commentaire
            return newSentence;
        }

        public static string Decompose_string(string sentence)
        {
            string decompose = "";
            // Ne rien modifier au dessus de ce commentaire

            // Ne rien modifier au dessous de ce commentaire
            return decompose;
        }

        public static long River_long(long n)
        {
            long river = 0;
            // Ne rien modifier au dessus de ce commentaire

            // Ne rien modifier au dessous de ce commentaire
            return river;
        }

        public static long River_meet(long a, long b)
        {
            long meet = 0;
            // Ne rien modifier au dessus de ce commentaire

            // Ne rien modifier au dessous de ce commentaire
            return meet;
        }

        public static bool River_is_sequence(long river, long sequence)
        {
            bool isSequence = true;
            // Ne rien modifier au dessus de ce commentaire

            // Ne rien modifier au dessous de ce commentaire
            return isSequence;
        }
    }
}
