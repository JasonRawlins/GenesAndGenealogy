import { ChildToFamilyLink } from "./ChildToFamilyLink";
import { PersonalNameStructure } from "./PersonalNameStructure";
import { SpouseToFamilyLink } from "./SpouseToFamilyLink";

export class IndividualRecord {
  xref: string = "";
  sexValue: string = "";
  submitter: string = "";
  automatedRecordId: string = "";
  personalNameStructures?: PersonalNameStructure[] = [];
  childToFamilyLinks: ChildToFamilyLink[] = [];
  spouseToFamilyLinks: SpouseToFamilyLink[] = [];
  given: string = "";
  surname: string = "";
  birth: string = "";
  death: string = "";
}
