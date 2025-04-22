namespace GenesAndGenealogy.Server.ViewModels;

public class ProfileModel
{
    public ProfileModel(TreeModel treeModel, IndividualModel individualModel, List<FamilyModel> families)
    {
        TreeModel = treeModel;
        Individual = individualModel;
        Families = families;
    }

    public TreeModel TreeModel { get; set; }
    public IndividualModel Individual { get; set; }
    public List<FamilyModel> Families { get; set; }

    public string AncestryLink
    {
        get
        {
            var xrefNumbersOnly = Individual.Xref.Replace("@", "").Replace("I", "");
            return $"https://www.ancestry.com/family-tree/person/tree/{TreeModel.AutomatedRecordId}/person/{xrefNumbersOnly}/facts";
        }
    }
}
