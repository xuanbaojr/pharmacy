namespace pharmacy.Dtos.Article
{
    public class ArticleDto
    {
        public class ArticleRequest
        {
            public string Title { get; set; }
            public string Content { get; set; }
        }

        public class ArticleResponse
        {
            public int Id { get; set; }
            public string Title { get; set; }
            public string Content { get; set; }
            public DateOnly CreatedAt { get; set; }
        }
    }
}

