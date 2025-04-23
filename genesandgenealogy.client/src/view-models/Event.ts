import { GedcomDate } from "./GedcomDate";
import { Place } from "./Place";

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
  tag: string;
}

//AddressStructure AddressStructure => First<AddressStructure>(C.ADDR);
//sourceCitations: SourceCitationModel[];
//multimediaLinks: MultimediaLinkModel[];
