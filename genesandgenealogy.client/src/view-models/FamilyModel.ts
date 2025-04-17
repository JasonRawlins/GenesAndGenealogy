import { IndividualModel } from "./IndividualModel";

export interface FamilyModel {
  husband: IndividualModel;
  wife: IndividualModel;
  children: IndividualModel[];
}
