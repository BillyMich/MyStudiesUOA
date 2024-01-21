namespace MyStudiesUOA.Domain.Models;

public partial class TeachesLeason
{
    public int Id { get; set; }

    public int TeacherId { get; set; }

    public int LeasonId { get; set; }

    public DateTimeOffset DateCreated { get; set; }

    public DateTimeOffset DateUpdated { get; set; }

    public virtual ICollection<GradeLeason> GradeLeasons { get; set; } = new List<GradeLeason>();

    public virtual Leason Leason { get; set; }

    public virtual User Teacher { get; set; }
}