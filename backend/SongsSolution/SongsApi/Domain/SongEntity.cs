namespace SongsApi.Domain;

public class SongEntity
{
    public string Id { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Artist { get; set; } = string.Empty;
    public string? Album { get; set; }

    public DateTime WhenAdded { get; set; }

    public bool Archived { get; set; } = false;

}


