using System.ComponentModel.DataAnnotations;

namespace SongsApi.Models;


public class CollectionResponse<T>
{
    public List<T> Data { get; set; } = new List<T>();
}

public record SongListItemResponse(string Id, string Title, string Artist, string? Album);


public record SongCreateRequest : IValidatableObject
{
    [Required]
    [MaxLength(100, ErrorMessage ="Way too long.")]
    public string Title { get; init; } = string.Empty;

    [Required]
    public string Artist { get; init; } = string.Empty;
    public string Album { get; init; } = string.Empty;

    public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
    {
       if(Title.ToLower() == "butter" && Artist.ToLower() == "bts")
        {
            yield return new ValidationResult("We don't like that song.", new string[] { "Title", "Artist"});
        }
    }
}