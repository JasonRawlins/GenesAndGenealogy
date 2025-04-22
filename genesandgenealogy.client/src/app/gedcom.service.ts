import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IndividualModel } from '../view-models/IndividualModel';
import { FamilyModel } from "../view-models/FamilyModel";
import { ProfileModel } from "../view-models/ProfileModel";

@Injectable()
export class GedcomService {
  
  constructor(private http: HttpClient) { }

  getIndividuals() {
    return this.http.get<IndividualModel[]>("/gedcom/individuals");
  }

  getProfile(xrefINDI: string) {
    return this.http.get<ProfileModel>(`/gedcom/profile/${xrefINDI}`);
  }

  getIndividualFamilies(xrefINDI: string) {
    return this.http.get<FamilyModel[]>(`/gedcom/individual/${xrefINDI}/families`);
  }

  getFamily(xrefFAM: string) {
    return this.http.get<FamilyModel>(`/gedcom/family/${xrefFAM}`);
  }
}
