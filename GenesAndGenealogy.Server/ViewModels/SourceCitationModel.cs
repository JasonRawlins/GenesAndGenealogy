using Gedcom.RecordStructures;

namespace GenesAndGenealogy.Server.ViewModels;

public class SourceCitationModel
{
    public SourceCitationModel(SourceCitation sourceCitation)
    {
        Data = sourceCitation.Data;
        Notes = sourceCitation.NoteStructures.Select(ns => ns.Text).ToList();
        WhereWithinSource = sourceCitation.WhereWithinSource;
    }

    //public string? CertaintyAssessment { get; set; }
    public SourceCitationData? Data { get; set; }
    //public EventTypeCitedFrom? EventTypeCitedFrom { get; set; }
    //public List<MultimediaLink>? MultimediaLinks { get; set; }
    public List<string>? Notes { get; set; }
    public string? WhereWithinSource { get; set; }

    public override string ToString()
    {
        return WhereWithinSource?.Substring(0, 64) ?? "Empty";
    }
}