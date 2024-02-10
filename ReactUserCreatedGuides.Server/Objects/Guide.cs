namespace ReactUserCreatedGuides.Server.Objects
{
    public class Guide
    {
        /// <summary>
        /// Internal Id for database
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// The name or desired name of the person who created the guide
        /// </summary>
        public string Author { get; set; }
        /// <summary>
        /// The programming language the guide covers, C++, C#, etc.
        /// </summary>
        public string ProgrammingLanguage { get; set; }
        /// <summary>
        /// The written language used in the guide, English, Spanish, etc.
        /// </summary>
        public string Language { get; set; }
        /// <summary>
        /// The summary to be displayed to give an idea of what the guide will cover and be about
        /// </summary>
        public string BriefSummary { get; set; }
        /// <summary>
        /// The full guide that will be displayed when the guide is opened
        /// </summary>
        public string DetailedGuide { get; set;}

        public Guide()
        {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; //Get a list of useable chars
            var stringChars = new char[20]; //create an empty arrary of chars
            var random = new Random(); //Init Random class

            //Loop through array and replace with random char
            for (int i = 0; i < stringChars.Length; i++)
            {
                stringChars[i] = chars[random.Next(chars.Length)];
            }

            //Create one string to assign to all
            var finalString = new String(stringChars);

            //Initilaize variables
            Id = 0;
            Author = finalString;
            ProgrammingLanguage = finalString;
            Language = finalString;
            BriefSummary = finalString;
            DetailedGuide = finalString;
        }
    }
}
