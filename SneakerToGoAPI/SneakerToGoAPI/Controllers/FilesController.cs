using Microsoft.AspNetCore.Mvc;
using SneakerToGoAPI.Models;

namespace SneakerToGoAPI.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class FilesController : Controller
    {

        [HttpPost]
        public IActionResult PostFile([FromForm] FileModel fileModel)
        {
            try
            {
                string path = Path.Combine(@"D:\SneakerToGo\SneakerToGoFontend\sneaktogo\public\assets\Images", fileModel.FileName);
                using(Stream stream = new FileStream(path,FileMode.Create ))
                {
                    fileModel.file.CopyTo(stream);
                }
                return StatusCode(StatusCodes.Status200OK, "OKKKKKKKKKK");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest, ex.Message);
            }
        }
    }
}
