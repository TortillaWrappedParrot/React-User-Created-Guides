namespace ReactUserCreatedGuides.Server.Objects
{
    public class Guide
    {
        public int Id { get; set; }
        public string Author { get; set; }

        public string ProgrammingLanguage { get; set; }

        public string Language { get; set; }

        public string BriefSummary { get; set; }

        public string DetailedGuide { get; set;}
    }
}
