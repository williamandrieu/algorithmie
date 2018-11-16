using System.Collections.Generic;
using System.Web.Mvc;
using TD_mvc.Models;

namespace TD_mvc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            Log log = new Log("Hello Log !");
            return View();
        }
    }
}
