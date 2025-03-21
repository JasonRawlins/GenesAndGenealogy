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

        [HttpGet(Name = "GetIndividualRecords")]
        public IEnumerable<IndividualRecord> Get()
        {
            return Gedcom1.GetIndividualRecords();
        }

        [HttpGet("individual-record/{xrefINDI}")]
        public IndividualRecord Get(string xrefINDI)
        {
            return Gedcom1.GetIndividualRecord(xrefINDI);
        }
    }
}
