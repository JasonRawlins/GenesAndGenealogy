import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

class IndividualRecord {
  xref: string = "";
  sexValue: string = "";
  submitter: string = "";
  automatedRecordId: string = "";
  personalNameStructures?: PersonalNameStructure[] = [];
  childToFamilyLinks?: ChildToFamilyLink[] = [];
  given: string = "";
  surname: string = "";
  birth: string = "";
  death: string = "";
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public individualRecord?: IndividualRecord;
  public individualRecords?: IndividualRecord[];
  public individualRecordNames?: IndividualRecordForDisplay[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getIndividualRecord("@I262590234298@");
    //this.getIndividualRecords();
    //this.getIndividualRecordNames();
  }

  getIndividualRecords() {
    this.http.get<IndividualRecord[]>('/gedcom/individual-records').subscribe(
      (individualRecords) => {
        this.individualRecords = individualRecords;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getIndividualRecord(xrefINDI: string) {
    this.http.get<IndividualRecord>('/gedcom/individual-record/' + xrefINDI).subscribe(
      (individualRecord) => {
        this.individualRecord = individualRecord;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getIndividualRecordNames() {
    this.http.get<IndividualRecordForDisplay[]>('/gedcom/individual-record-names').subscribe(
      (individualRecordNames) => {
        this.individualRecordNames = individualRecordNames;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'genesandgenealogy.client';
}
