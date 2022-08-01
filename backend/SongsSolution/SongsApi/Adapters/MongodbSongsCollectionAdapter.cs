using MongoDB.Driver;

namespace SongsApi.Adapters;

public class MongodbSongsCollectionAdapter
{

    private readonly IMongoCollection<SongEntity> _songsCollection;

    public MongodbSongsCollectionAdapter(string connectionString)
    {
        var client = new MongoClient(connectionString);
        var database = client.GetDatabase("songs_db");
        _songsCollection = database.GetCollection<SongEntity>("songs");
    }

    public IMongoCollection<SongEntity> Songs { get {  return _songsCollection; } }
}
