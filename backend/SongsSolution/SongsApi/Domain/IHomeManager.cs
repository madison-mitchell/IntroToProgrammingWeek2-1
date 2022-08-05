namespace SongsApi.Domain;

public interface IHomeManager
{
    Task<HomeRequestModel> GetHomeDocumentAsync();
}
