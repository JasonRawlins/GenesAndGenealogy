import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

class IndividualRecord {
  xref: string = "";
  sexValue: string = "";
  submitter: string = "";
  automatedRecordId: string = "";
  personalNameStructures?: PersonalNameStructure[] = [];
  childToFamilyLinks: ChildToFamilyLink[] = [];
  spouseToFamilyLinks: SpouseToFamilyLink[] = [];
  given: string = "";
  surname: string = "";
  birth: string = "";
  death: string = "";
}

class FamilyRecord {
  restrictionNotice: string = "";
  //familyEventStructures: FamilyEventStructure[];
  husband: string = "";
  wife: string = "";
  children: string[] = [];
  countOfChildren: string = "";
  submitter: string = "";
  //<LDS_SPOUSE_SEALING>> {0:M} p.36
  //userReferenceNumbers: UserReferenceNumber[] = [];
  automatedRecordNumber: string = "";
  //changeDate: ChangeDate?;
  //noteStructures: NoteStructure[] = [];
  //sourceCitations: SourceCitation[] = [];
  //MultimediaLinks: MultimediaLink[];
  adoptedByWhichParent: string = "";
}

interface FamilyDisplay {
  husband: IndividualRecord;
  wife: IndividualRecord;
}

interface PersonalNameStructure {
  namePersonal: string;
  nameType: string;
  given: string;
  namePrefix: string;
  nameSuffix: string;
  nickname: string;
  surname: string;
  surnamePrefix: string;
}

interface IndividualRecordForDisplay {
  xref: string;
  personalName: string;
  given: string;
  surname: string;
}

interface ChildToFamilyLink {
  xref: string;
}

interface SpouseToFamilyLink {
  xref: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public individualRecord?: IndividualRecord;
  public familyDisplays: FamilyDisplay[] = [];
  public familyRecords: FamilyRecord[] = [];
  public individualRecords: IndividualRecord[] = [];
  public individualRecordNames: IndividualRecordForDisplay[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getIndividualRecord("@I262590234298@");

    //this.getIndividualRecords();
    //this.getIndividualRecordNames();
  }

  getIndividualRecords() {
    this.http.get<IndividualRecord[]>("/gedcom/individual-records").subscribe(
      (individualRecords) => {
        this.individualRecords = individualRecords;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getIndividualRecord(xrefINDI: string) {
    this.http.get<IndividualRecord>(`/gedcom/individual-record/${xrefINDI}`).pipe(
      switchMap((individualRecord) => {
        this.individualRecord = individualRecord;
        return this.http.get<FamilyDisplay[]>(`/gedcom/family-records/${individualRecord.xref}`);
      })
    ).subscribe(familyDisplays => {
      this.familyDisplays = familyDisplays;
      console.log(familyDisplays);
    });
  }

  getFamilyRecord(xrefFAM: string) {
    this.http.get<FamilyRecord>(`/gedcom/family-record/${xrefFAM}`).subscribe(
      (familyRecord) => {
        this.familyRecords.push(familyRecord);
      },
      (error) => {
        console.error(error)
      }
    );
  }

  getIndividualRecordNames() {
    this.http.get<IndividualRecordForDisplay[]>("/gedcom/individual-record-names").subscribe(
      (individualRecordNames) => {
        this.individualRecordNames = individualRecordNames;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = "genesandgenealogy.client";
}
