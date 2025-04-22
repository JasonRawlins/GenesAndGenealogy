import { FamilyModel } from "./FamilyModel";
import { IndividualModel } from "./IndividualModel";
import { TreeModel } from "./TreeModel";

export interface ProfileModel {
  ancestryLink: string;
  families: FamilyModel[];
  individual: IndividualModel;
  tree: TreeModel;
}
