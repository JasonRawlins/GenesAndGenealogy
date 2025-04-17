export function createAncestryIndividualLink(treeRin: string, xrefINDI: string) {
  const xrefNumbersOnly = xrefINDI.replace('@', '').replace('@', '').replace('I', '');
  return `https://www.ancestry.com/family-tree/person/tree/${treeRin}/person/${xrefNumbersOnly}/facts`;
};
