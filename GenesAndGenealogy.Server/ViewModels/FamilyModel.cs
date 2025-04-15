using Gedcom.RecordStructures;

namespace GenesAndGenealogy.Server.ViewModels;

public class FamilyModel
{
    public FamilyModel(IndividualModel husband, IndividualModel wife)
    {
        Husband = husband;
        Wife = wife;
    }

    public IndividualModel Husband { get; set; }
    public IndividualModel Wife { get; set; }
}
