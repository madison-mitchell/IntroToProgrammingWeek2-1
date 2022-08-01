namespace SongsApi.Domain;

public interface IManageSongs
{
    Task<SongListItemResponse> AddSongAsync(SongCreateRequest request);
}