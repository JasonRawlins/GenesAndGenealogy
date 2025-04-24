import { GedcomDate } from "./GedcomDate";
import { Place } from "./Place";
import { SourceCitation } from "./SourceCitation";

export interface Event {
  //addressStructure: AddressStructure;
  ageAtEvent: string;
  causeOfEvent: string;
  eventOrFactClassification: string;
  gedcomDate: GedcomDate;
  name: string;
  notes: string[];
  //multimediaLinks: MultimediaLinkModel[];
  place: Place;
  religiousAffiliation: string;
  responsibleAgency: string;
  restrictionNotice: string;
  sourceCitations: SourceCitation[];
  tag: string;
}

