using MongoDB.Driver.Linq;
using MongoDB.Driver;
namespace SongsApi.Domain;

public class SongManager : IManageSongs
{
    private readonly MongodbSongsCollectionAdapter _adapter;

    public SongManager(MongodbSongsCollectionAdapter adapter)
    {
        _adapter = adapter;
    }

    public async Task<SongListItemResponse> AddSongAsync(SongCreateRequest request)
    {
        // 1. Create a SongEntity.
        var song = new SongEntity
        {
            Title = request.Title,
            Album = request.Album,
            Artist = request.Artist,
            Archived = false,
            WhenAdded = DateTime.Now
        };
        // 2. Give it to the Adapter.
        await _adapter.Songs.InsertOneAsync(song);

        var songListItemResponse = new SongListItemResponse(song.Id.ToString(), song.Title, song.Artist, song.Album);
        return songListItemResponse;
    }

    public async Task<List<SongListItemResponse>> GetAllSongsAsync()
    {
        // LINQ
        var query = _adapter.Songs.AsQueryable()
             .Where(s => s.Archived == false)
             .OrderBy(s => s.Title)
             .ThenBy(s => s.Artist)
             .Select(s => new SongListItemResponse(s.Id.ToString(), s.Title, s.Artist, s.Album));


        var response = await query.ToListAsync();
        return response;
       
    }
}
