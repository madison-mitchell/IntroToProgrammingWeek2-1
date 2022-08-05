namespace SongsApi.Adapters;

public class OnCallDeveloperApiAdapter
{

    private readonly HttpClient _httpClient;

    public OnCallDeveloperApiAdapter(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<OnCallDeveloperApiResponse?> GetOnCallDeveloperResourceAsync()
    {
        var response = await _httpClient.GetAsync("/");
        response.EnsureSuccessStatusCode();  // Guard. If the status isn't a 200 - 299, BLAMMO

        var content = await response.Content.ReadFromJsonAsync<OnCallDeveloperApiResponse>();

        return content;
    }


}



public class OnCallDeveloperApiResponse
{
    public string? name { get; set; }
    public string? emailAddress { get; set; }
    public string? when { get; set; }
}
