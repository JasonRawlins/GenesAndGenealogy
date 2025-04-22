namespace GenesAndGenealogy.Server.ViewModels;

public class ProfileModel
{
    public ProfileModel(TreeModel treeModel, IndividualModel individualModel, List<FamilyModel> familyModels, List<EventModel> eventModels)
    {
        Events = eventModels;
        Families = familyModels;
        Individual = individualModel;
        TreeModel = treeModel;
    }

    public List<EventModel> Events { get; set; }
    public List<FamilyModel> Families { get; set; }
    public IndividualModel Individual { get; set; }
    public TreeModel TreeModel { get; set; }

    public string AncestryLink
    {
        get
        {
            var xrefNumbersOnly = Individual.Xref.Replace("@", "").Replace("I", "");
            return $"https://www.ancestry.com/family-tree/person/tree/{TreeModel.AutomatedRecordId}/person/{xrefNumbersOnly}/facts";
        }
    }
}
