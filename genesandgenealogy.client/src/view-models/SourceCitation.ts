import { SourceCitationData } from "./SourceCitationData";

export interface SourceCitation {
  data: SourceCitationData;
  notes: string[];
  whereWithinSource: string;
}
