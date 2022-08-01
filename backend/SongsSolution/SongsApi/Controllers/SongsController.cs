

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
    public async Task<ActionResult<CollectionResponse<SongListItemResponse>>> GetSongs()
    {
        var response = new CollectionResponse<SongListItemResponse>();

        response.Data = await _songManager.GetAllSongsAsync();

        return Ok(response);
    }

    [HttpPost("/songs")]
    public async Task<ActionResult<SongListItemResponse>> AddASongAsync([FromBody] SongCreateRequest request)
    {

        SongListItemResponse response = await _songManager.AddSongAsync(request);
       
        return StatusCode(201, response);
    }
}
