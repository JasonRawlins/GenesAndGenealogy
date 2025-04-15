import { IndividualRecord } from "../gedcom/IndividualRecord";

export interface FamilyModel {
  husband: IndividualRecord;
  wife: IndividualRecord;
  children: IndividualRecord[];
}
