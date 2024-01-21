namespace MyStudiesUOA.Domain.Models;

public partial class Leason
{
    public int Id { get; set; }

    public string Name { get; set; }

    public int Semister { get; set; }

    public DateTimeOffset DateCreated { get; set; }

    public DateTimeOffset DateUpdated { get; set; }

    public virtual ICollection<TeachesLeason> TeachesLeasons { get; set; } = new List<TeachesLeason>();
}