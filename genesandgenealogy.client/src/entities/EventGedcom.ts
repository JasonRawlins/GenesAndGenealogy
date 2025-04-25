import { Place } from "./Place";
import { SourceCitation } from "./SourceCitation";
import { Address } from "./Address";
import { DateGedcom } from "./DateGedcom";

export interface EventGed {
  address: Address;
  ageAtEvent: string;
  causeOfEvent: string;
  eventOrFactClassification: string;
  date: DateGedcom;
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

