using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NutriDiary.Web.Models;

namespace NutriDiary.Web.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class FoodController : ControllerBase
    {
        private readonly List<FoodModel> _container;

        public FoodController()
        {
            _container = new List<FoodModel>();

            for (int i = 1; i < 100; i++)
            {
                _container.Add(new FoodModel
                {
                    Id = i,
                    Name = $"Food #{i}",
                    Description = "delicious food"
                });
            }
        }
        
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<FoodModel> Get(int id)
        {
            var food = _container.FirstOrDefault(f => f.Id == id);

            if (food != null)
            {
                return Ok(food);
            }

            return NotFound();
        }
    }
}