import { ChildToFamilyLink } from "./child-to-family-link";
import { PersonalNameStructure } from "./personal-name-structure";
import { SpouseToFamilyLink } from "./spouse-to-family-link";

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
