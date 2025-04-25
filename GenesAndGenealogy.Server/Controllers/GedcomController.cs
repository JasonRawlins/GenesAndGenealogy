using Microsoft.AspNetCore.Mvc;
using Gedcom.RecordStructures;
using Gedcom;
using GenesAndGenealogy.Server.ViewModels;

namespace GenesAndGenealogy.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GedcomController : ControllerBase
    {
        private readonly ILogger<GedcomController> _logger;
        private Gedcom.Gedcom Gedcom { get; }
        private TreeModel TreeModel => new TreeModel(Gedcom.Header.Source.Tree);

        public GedcomController(ILogger<GedcomController> logger)
        {
            _logger = logger;

            var gedFileLines = System.IO.File.ReadAllLines(@"C:\temp\Gedcom.NET\Resources\Gedcom.NET.ged");
            var gedcomLines = gedFileLines.Select(GedcomLine.Parse).ToList();
            Gedcom = new Gedcom.Gedcom(gedcomLines);
        }

        [HttpGet(Name = "GetGedcom")]
        public IEnumerable<IndividualModel> Get()
        {
            return Gedcom.GetIndividualRecords().Select(ir => new IndividualModel(ir, TreeModel));
        }

        [HttpGet("individual")]
        public List<IndividualModel> GetIndividuals()
        {
            return Gedcom.GetIndividualRecords().Select(ir => new IndividualModel(ir, TreeModel)).ToList();
        }

        [HttpGet("profile/{xrefINDI}")]
        public ProfileModel GetProfile(string xrefINDI)
        {
            var individualRecord = Gedcom.GetIndividualRecord(xrefINDI);
            var familyModels = GetFamilyModels(individualRecord);
            var individualModel = new IndividualModel(individualRecord, TreeModel);
            var eventModels = individualRecord.IndividualEventStructures
                .OrderBy(ies => ies.GedcomDate)
                .Select(ies => new EventModel(ies)).ToList();
            var repositories = Gedcom.GetRepositoryRecords().Select(r => new RepositoryModel(r)).ToList();
            var sources = Gedcom.GetSourceRecords().Select(r => new SourceModel(r)).ToList();
            var profileModel = new ProfileModel(TreeModel, individualModel, familyModels, eventModels, repositories, sources);

            return profileModel;
        }

        [HttpGet("individual/{xrefINDI}/families/")]
        public List<FamilyModel> GetIndividualFamilies(string xrefINDI)
        {
            return GetFamilyModels(Gedcom.GetIndividualRecord(xrefINDI));
        }

        private List<FamilyModel> GetFamilyModels(IndividualRecord individualRecord)
        {
            var familyRecords = new List<FamilyRecord>();

            foreach (var spouseToFamilyLink in individualRecord.SpouseToFamilyLinks)
            {
                var familyRecord = Gedcom.GetFamilyRecord(spouseToFamilyLink.Xref);
                familyRecords.Add(familyRecord);
            }

            var familyModels = new List<FamilyModel>();

            foreach (var familyRecord in familyRecords)
            {
                var partner1 = new IndividualModel(Gedcom.GetIndividualRecord(familyRecord.Husband), TreeModel);
                var partner2 = new IndividualModel(Gedcom.GetIndividualRecord(familyRecord.Wife), TreeModel);
                var children = new List<IndividualModel>();

                foreach (var childXref in familyRecord.Children)
                {
                    var childIndividualRecord = Gedcom.GetIndividualRecord(childXref);
                    children.Add(new IndividualModel(childIndividualRecord, TreeModel));
                }

                familyModels.Add(new FamilyModel(partner1, partner2, children));
            }

            return familyModels;
        }
    }
}
