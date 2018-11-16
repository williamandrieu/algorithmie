namespace TD_mvc.Models
{
    public class Log
    {
        public string Text { get; private set; }

        public Log(string text)
        {
            this.Text = text;
            System.Diagnostics.Debug.WriteLine(text);
        }
    }
}