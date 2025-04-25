import { Family } from "./Family";
import { Individual } from "./Individual";
import { Repository } from "./Repository";
import { Tree } from "./Tree";
import { EventGed } from "./EventGedcom";
import { Source } from "./Source";

export interface Profile {
  events: EventGed[];
  families: Family[];
  individual: Individual;
  repositories: Repository[];
  sources: Source[];
  tree: Tree;
}
