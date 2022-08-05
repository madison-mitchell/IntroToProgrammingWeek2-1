namespace SongsApi.Domain;

public class HomeManager : IHomeManager
{
    private readonly OnCallDeveloperApiAdapter _adapter;

    public HomeManager(OnCallDeveloperApiAdapter adapter)
    {
        _adapter = adapter;
    }

    public async Task<HomeRequestModel> GetHomeDocumentAsync()
    {
        var response = new HomeRequestModel();
        response.Resources.Add("/");
        response.Resources.Add("/songs");

        try
        {
            var apiResponse = await _adapter.GetOnCallDeveloperResourceAsync();
            response.OnCallDeveloper.Name = apiResponse?.name ?? "Elizabeth";
            response.OnCallDeveloper.Email = apiResponse?.emailAddress ?? "helpdesk@aol.com";
        }
        catch (Exception)
        {
            response.OnCallDeveloper.Name = "Unavailable";
            response.OnCallDeveloper.Email = "helpdesk@aol.com";
          
        }
        return response;
    }
}
