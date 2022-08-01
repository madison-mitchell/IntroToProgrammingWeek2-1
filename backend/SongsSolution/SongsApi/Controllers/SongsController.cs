

namespace SongsApi.Controllers;

[ApiController]
public class SongsController : ControllerBase
{
    [HttpGet("/songs")]
    public ActionResult<CollectionResponse<SongListItemResponse>> GetSongs()
    {
        var response = new CollectionResponse<SongListItemResponse>();

        response.Data.Add(new SongListItemResponse("1", "Crush with Eyeliner", "REM", "Monster"));
        response.Data.Add(new SongListItemResponse("2", "Houses in Motion", "Talking Heads", "Talking Heads 77"));
        return Ok(response);
    }

    [HttpPost("/songs")]
    public ActionResult<SongListItemResponse> AddASong([FromBody] SongCreateRequest request)
    {
        // if it's good, add it to the database, etc.
        var response = new SongListItemResponse(
            new Random().Next(1, 1000).ToString(),
            request.Title,
            request.Artist,
            request.Album);

        // return a copy of the thing you added to the database, with a 201 (Created) status code.
        return StatusCode(201, response);
    }
}
