import { Individual } from "./Individual";

export interface Family {
  children: Individual[];
  partner1: Individual;
  partner2: Individual;
}
