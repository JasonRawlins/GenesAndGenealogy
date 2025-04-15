using Microsoft.AspNetCore.Mvc;
using Gedcom.RecordStructures;
using Gedcom;
using System.Text.Json.Serialization;
using System.Text.Json;
using GenesAndGenealogy.Server.ViewModels;

namespace GenesAndGenealogy.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GedcomController : ControllerBase
    {
        private readonly ILogger<GedcomController> _logger;
        private Gedcom.Gedcom Gedcom { get; }
        public static JsonSerializerOptions JsonSerializerOptions1 { get => JsonSerializerOptions; set => JsonSerializerOptions = value; }

        public GedcomController(ILogger<GedcomController> logger)
        {
            _logger = logger;

            var gedFileLines = System.IO.File.ReadAllLines(@"C:\temp\Gedcom.NET\Resources\DeveloperTree.ged");
            var gedcomLines = gedFileLines.Select(GedcomLine.ParseLine).ToList();
            Gedcom = new Gedcom.Gedcom(gedcomLines);
        }

        private static JsonSerializerOptions JsonSerializerOptions = new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            WriteIndented = true,
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        };

        [HttpGet(Name = "GetGedcom")]
        public IEnumerable<IndividualRecord> Get()
        {
            return Gedcom.GetIndividualRecords();
        }

        [HttpGet("individual-records")]
        public List<IndividualRecord> GetIndividualRecords()
        {
            return Gedcom.GetIndividualRecords();
        }

        [HttpGet("individual-record/{xrefINDI}")]
        public IndividualRecord GetIndividualRecord(string xrefINDI)
        {
            var individualRecord =  Gedcom.GetIndividualRecord(xrefINDI);
            return individualRecord;
        }

        [HttpGet("individual-record/{xrefINDI}/families/")]
        public List<FamilyModel> GetIndividualFamilies(string xrefINDI)
        {
            var individualRecord = Gedcom.GetIndividualRecord(xrefINDI);
            var familyRecords = new List<FamilyRecord>();

            foreach (var spouseToFamilyLink in individualRecord.SpouseToFamilyLinks)
            {
                var familyRecord = Gedcom.GetFamilyRecord(spouseToFamilyLink.Xref);
                familyRecords.Add(familyRecord);
            }

            var familyModels = new List<FamilyModel>();

            foreach (var familyRecord in familyRecords)
            {
                var husband = new IndividualModel(Gedcom.GetIndividualRecord(familyRecord.Husband));
                var wife = new IndividualModel(Gedcom.GetIndividualRecord(familyRecord.Wife));
                var children = new List<IndividualModel>();

                foreach (var childXref in familyRecord.Children)
                {
                    var childIndividualRecord = Gedcom.GetIndividualRecord(childXref);
                    children.Add(new IndividualModel(childIndividualRecord));
                }

                familyModels.Add(new FamilyModel(husband, wife, children));
            }

            return familyModels;
        }
    }
}
