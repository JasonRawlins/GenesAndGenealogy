using Gedcom.RecordStructures;
using Gedcom;

namespace GenesAndGenealogy.Server.ViewModels;

public class SourceModel
{
    public SourceModel(SourceRecord sourceRecord)
    {
        AutomatedRecordId = sourceRecord.AutomatedRecordId;
        CallNumber = sourceRecord.CallNumber;
        ChangeDate = sourceRecord.ChangeDate;
        //MultimediaLinks = sourceRecord.MultimediaLinks;
        Notes = sourceRecord.NoteStructures.Select(ns => ns.Text).ToList();
        Title = sourceRecord.SourceDescriptiveTitle.Text;
        FiledByEntry = sourceRecord.SourceFiledByEntry.Text;
        Originator = sourceRecord.SourceOriginator.Text;
        PublicationFacts = sourceRecord.SourcePublicationFacts.Text;
        //RecordData = sourceRecord.SourceRecordData;
        //SourceRepositoryCitations = sourceRecord.SourceRepositoryCitations;
        TextFromSource = sourceRecord.TextFromSource.Text;
        //UserReferenceNumbers = sourceRecord.UserReferenceNumbers
    }

    public string AutomatedRecordId { get; set; }
    public string CallNumber { get; set; }
    public ChangeDate ChangeDate { get; set; }
    //public List<MultimediaLink> MultimediaLinks { get; set; }
    public List<string> Notes { get; set; }
    public string Title { get; set; }
    public string FiledByEntry { get; set; }
    public string Originator { get; set; }
    public string PublicationFacts { get; set; }
    //public SourceRecordData RecordData { get; set; }
    //public List<SourceRepositoryCitation> SourceRepositoryCitations { get; set; }
    public string TextFromSource { get; set; }
    //public List<UserReferenceNumber> UserReferenceNumbers { get; set; }

    public override string ToString() => $"({AutomatedRecordId}) {TextFromSource}";
}