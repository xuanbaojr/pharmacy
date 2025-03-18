namespace pharmacy.Models
{
    public class Article
    {
        public int ArticleID { get; set; }
        public string Title { get; set; }   
        public string Content { get; set; }
        public DateOnly CreatedAt { get; set; }
    }
}
