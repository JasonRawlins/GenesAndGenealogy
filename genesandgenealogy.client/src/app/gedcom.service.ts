import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IndividualRecord } from '../gedcom/IndividualRecord';
import { FamilyRecord } from '../gedcom/FamilyRecord';
import { IndividualModel } from '../view-models/IndividualModel';
import { FamilyModel } from "../view-models/FamilyModel";

@Injectable()
export class GedcomService {
  
  constructor(private http: HttpClient) { }

  getIndividualRecords() {
    return this.http.get<IndividualRecord[]>("/gedcom/individual-records");
  }

  getIndividualRecord(xrefINDI: string) {
    return this.http.get<IndividualRecord>(`/gedcom/individual-record/${xrefINDI}`);
  }

  getIndividualFamilyRecords(xrefINDI: string) {
    return this.http.get<FamilyModel[]>(`/gedcom/individual-record/${xrefINDI}/families`);
  }

  getFamilyRecord(xrefFAM: string) {
    return this.http.get<FamilyRecord>(`/gedcom/family-record/${xrefFAM}`);
  }
}
