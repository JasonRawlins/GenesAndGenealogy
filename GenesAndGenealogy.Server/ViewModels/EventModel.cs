using Gedcom.RecordStructures;
using Gedcom;
using System.Runtime.Intrinsics.X86;
using System;

namespace GenesAndGenealogy.Server.ViewModels;

public class EventModel
{
    public EventModel(IndividualEventStructure individualEventStructure)
    {
        // AddressStructure
        AgeAtEvent = individualEventStructure.AgeAtEvent;
        CauseOfEvent = individualEventStructure.CauseOfEvent;
        DateValue = individualEventStructure.DateValue;
        EventOrFactClassification = individualEventStructure.EventOrFactClassification;
        // MultimediaLinks
        Name = individualEventStructure.Name;
        // NoteStuctures
        // PlaceStructure
        ReligiousAffiliation = individualEventStructure.ReligiousAffiliation;
        ResponsibleAgency = individualEventStructure.ResponsibleAgency;
        RestrictionNotice = individualEventStructure.RestrictionNotice;
        // SourceCitations
        Tag = individualEventStructure.Tag;

    }

    //public AddressStructure AddressStructure { get; set; }
    public string AgeAtEvent { get; set; }
    public string CauseOfEvent { get; set; }
    public string DateValue { get; set; }
    public string EventOrFactClassification { get; set; }
    //public List<MultimediaLink> MultimediaLinks { get; set; }
    public string Name { get; set; }
    //public List<NoteStructure> NoteStructures { get; set; }
    //public PlaceStructure PlaceStructure { get; set; }
    public string ReligiousAffiliation { get; set; }
    public string ResponsibleAgency { get; set; }
    public string RestrictionNotice { get; set; }
    //public List<SourceCitation> SourceCitations { get; set; }
    public string Tag { get; set; }
}