using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SongsApi.Domain;

public class SongEntity
{


    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public ObjectId Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Artist { get; set; } = string.Empty;
    public string? Album { get; set; }

    public DateTime WhenAdded { get; set; }

    public bool Archived { get; set; } = false;

}


