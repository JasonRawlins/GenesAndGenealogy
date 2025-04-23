using Gedcom.RecordStructures;
using Gedcom;

namespace GenesAndGenealogy.Server.ViewModels;

public class RepositoryModel
{
    public RepositoryModel(RepositoryRecord repositoryRecord)
    {
        Emails = repositoryRecord.AddressEmails;
        FaxNumbers = repositoryRecord.AddressFaxNumbers;
        //AddressStructure = repositoryRecord.AddressStructure;
        WebPages = repositoryRecord.AddressWebPages;
        AutomatedRecordId = repositoryRecord.AutomatedRecordId;
        //CallNumber = repositoryRecord.CallNumber;
        //ChangeDate = repositoryRecord.ChangeDate;
        Name = repositoryRecord.Name;
        Notes = repositoryRecord.NoteStructures.Select(ns => ns.Text).ToList();
        PhoneNumbers = repositoryRecord.PhoneNumbers;
        //UserReferenceNumber = repositoryRecord.UserReferenceNumber;
        Xref = repositoryRecord.Xref;
    }

    public List<string> Emails { get; set; }
    public List<string> FaxNumbers { get; set; }
    //public AddressStructure AddressStructure { get; set; }
    public List<string> WebPages { get; set; }
    public string AutomatedRecordId { get; set; }
    //public CallNumber CallNumber { get; set; }
    //public ChangeDate ChangeDate { get; set; }
    public string Name { get; set; }
    public List<string> Notes { get; set; }
    public List<string> PhoneNumbers { get; set; }
    //public UserReferenceNumber UserReferenceNumber { get; set; }
    public string Xref { get; set; }

    public override string ToString() => Name;
}