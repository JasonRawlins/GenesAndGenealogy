import { Event } from "./Event";
import { Family } from "./Family";
import { Individual } from "./Individual";
import { Repository } from "./Repository";
import { Tree } from "./Tree";

export interface Profile {
  events: Event[];
  families: Family[];
  individual: Individual;
  repositories: Repository[];
  tree: Tree;
}
