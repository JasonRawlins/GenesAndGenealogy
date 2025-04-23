using Gedcom.RecordStructures;

namespace GenesAndGenealogy.Server.ViewModels;

public class IndividualModel
{
    public IndividualModel(IndividualRecord individualRecord)
    {
        Xref = individualRecord.Xref;
        AutomatedRecordId = individualRecord.AutomatedRecordId;
        Birth = GedcomDate.Parse(individualRecord.Birth.DateValue);
        Death = GedcomDate.Parse(individualRecord.Death.DateValue);
        Given = individualRecord.PersonalNameStructures[0].Given;
        PersonalName = individualRecord.PersonalNameStructures[0].NamePersonal;
        SexValue = individualRecord.SexValue;
        Submitter = individualRecord.Submitter;
        Surname = individualRecord.PersonalNameStructures[0].Surname;
    }

    public string Xref { get; set; }
    public string AutomatedRecordId { get; set; }
    public GedcomDate Birth { get; set; }
    public GedcomDate Death { get; set; }
    public string Given { get; set; }
    public string PersonalName { get; set; }
    public string SexValue { get; set; }
    public string Submitter { get; set; }
    public string Surname { get; set; }
}
