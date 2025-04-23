import { DateModel } from "./DateModel";

export interface EventModel {
  ageAtEvent: string;
  causeOfEvent: string;
  gedcomDate: DateModel;  
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
