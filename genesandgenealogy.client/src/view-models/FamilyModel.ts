import { IndividualRecord } from "../gedcom/individual-record";

export interface FamilyModel {
  husband: IndividualRecord;
  wife: IndividualRecord;
}
