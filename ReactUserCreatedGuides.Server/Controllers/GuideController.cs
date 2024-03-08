using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactUserCreatedGuides.Server.Data;
using ReactUserCreatedGuides.Server.Objects;

namespace ReactUserCreatedGuides.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GuideController : ControllerBase
    {
        //Debug names before the ability to add to database is added
        private static readonly string[] AuthorNames = new[]
        {
            "Tim", "Billy", "Bob", "Jhon", "Jane"
        };

        private static readonly string[] ProgrammingLanguages = new[]
        {
            "C++", "C#", "Javascript", "Java"
        };

        private static readonly string[] Languages = new[]
        {
            "English", "Spanish", "French", "German"
        };

        private static readonly string[] BriefSummaries = new[]
        {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Mattis nunc sed blandit libero volutpat sed. Ultricies integer quis auctor elit sed vulputate mi."
        };

        private static readonly string[] DetailedGuides = new[]
        {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida. Et ultrices neque ornare aenean euismod elementum. Enim ut tellus elementum sagittis vitae et leo duis ut. Arcu odio ut sem nulla pharetra diam. Mattis vulputate enim nulla aliquet porttitor. Adipiscing diam donec adipiscing tristique risus nec feugiat. In hendrerit gravida rutrum quisque non tellus. Integer enim neque volutpat ac tincidunt vitae. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Et magnis dis parturient montes. Leo integer malesuada nunc vel risus commodo viverra.",
            "Mattis nunc sed blandit libero volutpat sed. Ultricies integer quis auctor elit sed vulputate mi. Proin fermentum leo vel orci porta non. Faucibus et molestie ac feugiat sed. Tellus rutrum tellus pellentesque eu tincidunt. Vitae et leo duis ut diam quam nulla porttitor. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Ut enim blandit volutpat maecenas. Magna eget est lorem ipsum dolor sit amet consectetur. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam."
        };

        private readonly GuideContext _context;
        private readonly ILogger<GuideController> _logger;

        public GuideController(GuideContext context, ILogger<GuideController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet(Name = "GetGuide")]
        public IEnumerable<Guide> Get()
        {
            //return Enumerable.Range(1, 5).Select(index => new Guide
            //{
            //    Author = AuthorNames[Random.Shared.Next(AuthorNames.Length)],
            //    ProgrammingLanguage = ProgrammingLanguages[Random.Shared.Next(ProgrammingLanguages.Length)],
            //    Language = Languages[Random.Shared.Next(Languages.Length)],
            //    BriefSummary = BriefSummaries[Random.Shared.Next(BriefSummaries.Length)],
            //    DetailedGuide = DetailedGuides[Random.Shared.Next(DetailedGuides.Length)]
            //})
            //.ToArray();

            return _context.Guides.ToArray();
        }

        [HttpPost]
        public async Task<IActionResult> Create([Bind("Author,ProgrammingLanguage,Language,BriefSummary,DetailedGuide")] Guide newGuide)
        {
            if (ModelState.IsValid)
            {
                _context.Add(newGuide);
                await _context.SaveChangesAsync();
            }
            return RedirectToAction(nameof(Index));
        }
    }
}
