import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Individual } from '../view-models/Individual';
import { Family } from "../view-models/Family";
import { Profile } from "../view-models/Profile";

@Injectable()
export class GedcomService {
  
  constructor(private http: HttpClient) { }

  getIndividuals() {
    return this.http.get<Individual[]>("/gedcom/individuals");
  }

  getProfile(xrefINDI: string) {
    return this.http.get<Profile>(`/gedcom/profile/${xrefINDI}`);
  }

  getIndividualFamilies(xrefINDI: string) {
    return this.http.get<Family[]>(`/gedcom/individual/${xrefINDI}/families`);
  }

  getFamily(xrefFAM: string) {
    return this.http.get<Family>(`/gedcom/family/${xrefFAM}`);
  }
}
