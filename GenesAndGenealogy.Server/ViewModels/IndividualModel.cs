using Gedcom.RecordStructures;

namespace GenesAndGenealogy.Server.ViewModels;

public class IndividualModel
{
    public IndividualModel(IndividualRecord individualRecord)
    {
        Xref = individualRecord.Xref;
        PersonalName = individualRecord.PersonalNameStructures[0].NamePersonal;
        Given = individualRecord.PersonalNameStructures[0].Given;
        Surname = individualRecord.PersonalNameStructures[0].Surname;
    }

    public string Xref { get; set; }
    public string PersonalName { get; set; }
    public string Given { get; set; }
    public string Surname { get; set; }
}
