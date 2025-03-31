using Microsoft.AspNetCore.Mvc;
using Gedcom.RecordStructures;
using Gedcom;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace GenesAndGenealogy.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GedcomController : ControllerBase
    {
        private readonly ILogger<GedcomController> _logger;
        private Gedcom.Gedcom Gedcom { get; }

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

        [HttpGet("individual-record-names")]
        public List<IndividualRecordForDisplay> GetIndividualRecordNames()
        {
            return Gedcom.GetIndividualRecords().Select(ir => new IndividualRecordForDisplay(ir)).ToList();
        }

        [HttpGet("individual-record/{xrefINDI}")]
        public IndividualRecord GetIndividualRecord(string xrefINDI)
        {
            var individualRecord =  Gedcom.GetIndividualRecord(xrefINDI);
            return individualRecord;
        }
    }

    public class IndividualRecordForDisplay
    {
        public IndividualRecordForDisplay(IndividualRecord individualRecord)
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
}
