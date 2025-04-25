import { EventGed } from "./EventGedcom";
export interface Individual {
  ancestryLink: string;
  automatedRecordId: string;
  birth: EventGed;
  death: EventGed;
  given: string;
  personalName: string;
  sexValue: string;
  submitter: string;
  surname: string;
  xref: string;
}
