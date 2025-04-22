import { IndividualModel } from "./IndividualModel";

export interface FamilyModel {
  partner1: IndividualModel;
  partner2: IndividualModel;
  children: IndividualModel[];
}
