import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IndividualModel } from '../view-models/IndividualModel';
import { FamilyModel } from "../view-models/FamilyModel";

@Injectable()
export class GedcomService {
  
  constructor(private http: HttpClient) { }

  getIndividuals() {
    return this.http.get<IndividualModel[]>("/gedcom/individuals");
  }

  getIndividual(xrefINDI: string) {
    return this.http.get<IndividualModel>(`/gedcom/individual/${xrefINDI}`);
  }

  getIndividualFamilies(xrefINDI: string) {
    return this.http.get<FamilyModel[]>(`/gedcom/individual/${xrefINDI}/families`);
  }

  getFamily(xrefFAM: string) {
    return this.http.get<FamilyModel>(`/gedcom/family/${xrefFAM}`);
  }
}
