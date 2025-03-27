using Microsoft.AspNetCore.Mvc;
using Gedcom.RecordStructures;
using Gedcom;

namespace GenesAndGenealogy.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GedcomController : ControllerBase
    {
        private readonly ILogger<GedcomController> _logger;
        private Gedcom.Gedcom Gedcom1 { get; }

        public GedcomController(ILogger<GedcomController> logger)
        {
            _logger = logger;

            var gedFileLines = System.IO.File.ReadAllLines(@"C:\temp\Gedcom.NET\Resources\DeveloperTree.ged");
            var gedcomLines = gedFileLines.Select(GedcomLine.ParseLine).ToList();
            Gedcom1 = new Gedcom.Gedcom(gedcomLines);
        }

        [HttpGet(Name = "GetGedcom")]
        public IEnumerable<IndividualRecord> Get()
        {
            return Gedcom1.GetIndividualRecords();
        }

        [HttpGet("individual-records")]
        public List<IndividualRecord> GetIndividualRecords()
        {
            return Gedcom1.GetIndividualRecords();
        }

        [HttpGet("individual-record-names")]
        public List<IndividualRecordForDisplay> GetIndividualRecordNames()
        {
            return Gedcom1.GetIndividualRecords().Select(ir => new IndividualRecordForDisplay(ir)).ToList();
        }

        [HttpGet("individual-record/{xrefINDI}")]
        public IndividualRecord GetIndividualRecord(string xrefINDI)
        {
            return Gedcom1.GetIndividualRecord(xrefINDI);
        }
    }

    public class IndividualRecordForDisplay
    {
        public IndividualRecordForDisplay(IndividualRecord individualRecord)
        {
            Xref = individualRecord.Xref;
            PersonalName = individualRecord.PersonalNameStructures[0].NamePersonal;
        }

        public string Xref { get; set; }
        public string PersonalName { get; set; }
    }
}
