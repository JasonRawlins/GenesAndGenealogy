import { GedcomDate } from "./GedcomDate";

export interface Individual {
  xref: string;
  automatedRecordId: string;
  birth: GedcomDate;
  death: GedcomDate;
  given: string;
  personalName: string;
  sexValue: string;
  submitter: string;
  surname: string;
}
