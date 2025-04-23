import { Event } from "./Event";
import { Family } from "./Family";
import { Individual } from "./Individual";
import { Tree } from "./Tree";

export interface Profile {
  ancestryLink: string;
  events: Event[];
  families: Family[];
  individual: Individual;
  tree: Tree;
}
