

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
    public ActionResult<CollectionResponse<SongListItemResponse>> GetSongs()
    {
        var response = new CollectionResponse<SongListItemResponse>();

        response.Data.Add(new SongListItemResponse("1", "Crush with Eyeliner", "REM", "Monster"));
        response.Data.Add(new SongListItemResponse("2", "Houses in Motion", "Talking Heads", "Talking Heads 77"));
        return Ok(response);
    }

    [HttpPost("/songs")]
    public async Task<ActionResult<SongListItemResponse>> AddASongAsync([FromBody] SongCreateRequest request)
    {

        SongListItemResponse response = await _songManager.AddSongAsync(request);
       
        return StatusCode(201, response);
    }
}
