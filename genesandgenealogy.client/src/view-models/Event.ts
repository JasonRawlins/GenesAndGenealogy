import { GedcomDate } from "./GedcomDate";

export interface Event {
  ageAtEvent: string;
  causeOfEvent: string;
  gedcomDate: GedcomDate;  
  eventOrFactClassification: string;
  name: string;
  religiousAffiliation: string;
  responsibleAgency: string;
  restrictionNotice: string;
  tag: string;
}

//PlaceStructure PlaceStructure => First<PlaceStructure>(C.PLAC);
//AddressStructure AddressStructure => First<AddressStructure>(C.ADDR);
//noteStructures: NoteModel[];
//sourceCitations: SourceCitationModel[];
//multimediaLinks: MultimediaLinkModel[];
