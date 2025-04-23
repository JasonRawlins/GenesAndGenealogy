using Gedcom.RecordStructures;

namespace GenesAndGenealogy.Server.ViewModels;

public class DateModel
{
    public DateModel(GedcomDate gedcomDate)
    {
        Day = gedcomDate.Day;
        Month = gedcomDate.Month;
        MonthName = gedcomDate.MonthName;
        Year = gedcomDate.Year;
        DayMonthYear = gedcomDate.DayMonthYear;
        Time = gedcomDate.TimeValue;
    }

    public int Day { get; set; }
    public int Month { get; set; }
    public string MonthName { get; set; }
    public int Year { get; set; }
    public string DayMonthYear { get; set; }
    public string Time { get; set; }
}