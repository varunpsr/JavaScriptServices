using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApplicationBasic.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public string GetUser()
        {
            return User.Identity.Name;
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
