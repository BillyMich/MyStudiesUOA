namespace MyStudiesUOA.Domain.Models;

public partial class User
{
    public int Id { get; set; }

    public string UserName { get; set; }

    public string FullName { get; set; }

    public int UserType { get; set; }

    public string Email { get; set; }

    public string Password { get; set; }

    public DateTimeOffset DateCreated { get; set; }

    public DateTimeOffset DateUpdated { get; set; }

    public virtual ICollection<TeachesLeason> TeachesLeasons { get; set; } = new List<TeachesLeason>();
}