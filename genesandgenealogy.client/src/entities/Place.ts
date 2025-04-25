import { Map } from "./Map";

export interface Place {
  name: string;
  hierarchy: string;
  map: Map;
  notes: string[]
}
