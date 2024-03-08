using System.ComponentModel.DataAnnotations;

namespace ReactUserCreatedGuides.Server.Objects
{
    public class Guide
    {
        /// <summary>
        /// Internal Id for database
        /// </summary>
        [Key]
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
    }
}
