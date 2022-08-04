

namespace SongsApi.Controllers;

[ApiController]
public class SongsController : ControllerBase

{
    private readonly IManageSongs _songManager;

    public SongsController(IManageSongs songManager)
    {
        _songManager = songManager;
    }

    [HttpGet("/songs")]
    [ResponseCache(Duration =5, Location = ResponseCacheLocation.Any)]
    public async Task<ActionResult<CollectionResponse<SongListItemResponse>>> GetSongs()
    {
        await Task.Delay(1000);
        var response = new CollectionResponse<SongListItemResponse>();

        response.Data = await _songManager.GetAllSongsAsync();

        return Ok(response);
    }

    [HttpPost("/songs")]
    public async Task<ActionResult<SongListItemResponse>> AddASongAsync([FromBody] SongCreateRequest request)
    {
        await Task.Delay(6000);
        if(request.Title == "Butter") {
            return BadRequest("That song is annoying");
        }
        SongListItemResponse response = await _songManager.AddSongAsync(request);
       
        return StatusCode(201, response);
    }
}
