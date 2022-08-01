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
}
