namespace SongsApi.Domain;

public class HomeManager : IHomeManager
{
    public async Task<HomeRequestModel> GetHomeDocumentAsync()
    {
        var response = new HomeRequestModel();
        response.Resources.Add("/");
        response.Resources.Add("/songs");
        response.OnCallDeveloper.Name = "Jeff Gonzalez";
        response.OnCallDeveloper.Email = "jeff@hypertheory.com";
        return response;
    }
}
