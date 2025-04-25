import { DateGedcom } from "./DateGedcom";

export interface Source {
  automatedRecordId: string;
  callNumber: string;
  changeDate: DateGedcom;
  //multimediaLinks: [];
  notes: string[];
  title: string;
  filedByEntry: string;
  originator: string;
  publicationFacts: string;
  //recordData: SourceRecordData;
  //sourceRepositoryCitations: SourceRepositoryCitation[];
  textFromSource: string;
  //userReferenceNumbers: UserReferenceNumber[];
}

