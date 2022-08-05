namespace SongsApi.Models;

public class HomeRequestModel
{
    public string ApiName { get; set; } = "songs-api";
    public List<string> Resources { get; set; } = new();

    public OnCallDeveloperInformation OnCallDeveloper { get; set; } = new();
}

public class OnCallDeveloperInformation
{
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
}
