import { GedcomDate } from "./GedcomDate";
import { Place } from "./Place";
import { SourceCitation } from "./SourceCitation";

export interface Event {
  ageAtEvent: string;
  causeOfEvent: string;
  gedcomDate: GedcomDate;  
  eventOrFactClassification: string;
  name: string;
  notes: string[];
  place: Place;
  religiousAffiliation: string;
  responsibleAgency: string;
  restrictionNotice: string;
  sourceCitations: SourceCitation[];
  tag: string;
}

//AddressStructure AddressStructure => First<AddressStructure>(C.ADDR);
//sourceCitations: SourceCitationModel[];
//multimediaLinks: MultimediaLinkModel[];
