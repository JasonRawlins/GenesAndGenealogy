using Gedcom.RecordStructures;

namespace GenesAndGenealogy.Server.ViewModels;

public class FamilyModel
{
    public FamilyModel(IndividualModel husband, IndividualModel wife)
    {
        Husband = husband;
        Wife = wife;
        Children = new List<IndividualModel>();
    }

    public FamilyModel(IndividualModel husband, IndividualModel wife, List<IndividualModel> children) : this(husband, wife)
    {
        Children = children;
    }

    public IndividualModel Husband { get; set; }
    public IndividualModel Wife { get; set; }
    public List<IndividualModel> Children { get; set; }
}
