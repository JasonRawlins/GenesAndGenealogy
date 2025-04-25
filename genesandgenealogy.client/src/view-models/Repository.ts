import { Address } from "./Address";

export interface Repository {
  address: Address;
  automatedRecordId: string;
  //callNumber: CallNumber;
  //changeDate: ChangeDate;
  emails: string[];
  faxNumbers: string[];
  name: string;
  notes: string[];
  phoneNumbers: string[];
  //userReferenceNumber: UserReferenceNumber;
  webPages: string[];
  xref: number;
}

