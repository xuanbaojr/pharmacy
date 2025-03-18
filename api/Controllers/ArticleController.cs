using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using pharmacy.Data;
using pharmacy.Dtos.Article;
using pharmacy.Models;
using System.Linq;

namespace pharmacy.Controllers
{
    [Route("api")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private BaseResponse<object> _res;

        public ArticleController(ApplicationDBContext context)
        {
            _context = context;
            _res = new BaseResponse<object>();
        }

        // RAT01: Lấy ra các bài viết
        [HttpGet("RAT01")]
        public IActionResult GetAllArticles()
        {
            try
            {
                var articles = _context.Articles.Select(a => new ArticleDto.ArticleResponse
                {
                    Id = a.ArticleID,
                    Title = a.Title,
                    Content = a.Content,
                    CreatedAt = a.CreatedAt
                }).ToList();

                _res.Status = StatusCodes.Status200OK.ToString();
                _res.Data = articles;
                return Ok(_res);
            }
            catch (System.Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }

        // IAT01: Thêm bài viết, chỉ tài khoản role Admin mới thêm bài viết được
        [HttpPost("IAT01")]
        [Authorize(Roles = "Admin")]
        public IActionResult AddArticle([FromBody] ArticleDto.ArticleRequest newArticleRequest)
        {
            try
            {
                var newArticle = new Article
                {
                    Title = newArticleRequest.Title,
                    Content = newArticleRequest.Content,
                    CreatedAt = DateOnly.FromDateTime(DateTime.Now)
                };

                _context.Articles.Add(newArticle);
                _context.SaveChanges();

                var response = new ArticleDto.ArticleResponse
                {
                    Id = newArticle.ArticleID,
                    Title = newArticle.Title,
                    Content = newArticle.Content,
                    CreatedAt = newArticle.CreatedAt
                };

                _res.Status = StatusCodes.Status201Created.ToString();
                _res.Data = response;
                return CreatedAtAction(nameof(GetAllArticles), new { id = newArticle.ArticleID }, _res);
            }
            catch (System.Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }

        // DAT01: Xóa bài viết
        [HttpDelete("DAT01/{id}")]
        public IActionResult DeleteArticle([FromRoute] int id)
        {
            try
            {
                var article = _context.Articles.Find(id);
                if (article == null)
                {
                    _res.Status = StatusCodes.Status404NotFound.ToString();
                    return NotFound(_res);
                }

                _context.Articles.Remove(article);
                _context.SaveChanges();

                _res.Status = StatusCodes.Status200OK.ToString();
                return Ok(_res);
            }
            catch (System.Exception ex)
            {
                _res.Status = StatusCodes.Status500InternalServerError.ToString();
                _res.Messages.Add(Message.CreateErrorMessage("API_CODE", _res.Status, ex.Message, string.Empty));
                return StatusCode(500, _res);
            }
        }
    }
}

