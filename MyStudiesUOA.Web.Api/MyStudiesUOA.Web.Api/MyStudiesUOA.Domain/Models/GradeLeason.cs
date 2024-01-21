namespace MyStudiesUOA.Domain.Models;

public partial class GradeLeason
{
    public int Id { get; set; }

    public int TeachesLeasonId { get; set; }

    public int Grade { get; set; }

    public virtual TeachesLeason TeachesLeason { get; set; }
}