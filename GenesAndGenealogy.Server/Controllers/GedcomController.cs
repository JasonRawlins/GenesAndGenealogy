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
        //private static readonly JsonSerializerOptions JsonSerializerOptions = new JsonSerializerOptions
        //{
        //    PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        //    WriteIndented = true,
        //    DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        //};

        public GedcomController(ILogger<GedcomController> logger)
        {
            _logger = logger;

            var gedFileLines = System.IO.File.ReadAllLines(@"C:\temp\Gedcom.NET\Resources\DeveloperTree.ged");
            var gedcomLines = gedFileLines.Select(GedcomLine.ParseLine).ToList();
            Gedcom = new Gedcom.Gedcom(gedcomLines);
        }

        [HttpGet(Name = "GetGedcom")]
        public IEnumerable<IndividualModel> Get()
        {
            return Gedcom.GetIndividualRecords().Select(ir => new IndividualModel(ir));
        }

        [HttpGet("individual")]
        public List<IndividualModel> GetIndividuals()
        {
            return Gedcom.GetIndividualRecords().Select(ir => {
                var individualModel = new IndividualModel(ir);
                individualModel.TreeAutomatedRecordId = Gedcom.Header.Tree.AutomatedRecordId;
                return individualModel;
            }).ToList();
        }

        [HttpGet("individual/{xrefINDI}")]
        public IndividualModel GetIndividual(string xrefINDI)
        {
            var individualModel = new IndividualModel(Gedcom.GetIndividualRecord(xrefINDI));
            individualModel.TreeAutomatedRecordId = Gedcom.Header.Source.Tree.AutomatedRecordId;
            return individualModel;
        }

        [HttpGet("individual/{xrefINDI}/families/")]
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
