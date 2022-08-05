namespace SongsApi.Controllers;

public class HomeController : ControllerBase
{
    private readonly IHomeManager _homeManager;

    public HomeController(IHomeManager homeManager)
    {
        _homeManager = homeManager;
    }

    [HttpGet("/")]
    public async Task<ActionResult> GetApiInformation()
    {

        HomeRequestModel response = await _homeManager.GetHomeDocumentAsync();
        
        return Ok(response);
    }
}
