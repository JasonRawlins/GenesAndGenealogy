import { DateModel } from "./DateModel";

export interface IndividualModel {
  xref: string;
  automatedRecordId: string;
  birth: DateModel;
  death: DateModel;
  given: string;
  personalName: string;
  sexValue: string;
  submitter: string;
  surname: string;
}
