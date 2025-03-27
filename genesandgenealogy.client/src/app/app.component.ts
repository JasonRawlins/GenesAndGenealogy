import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface IndividualRecord {
  xref: string;
  sexValue: string;
  submitter: string;
  automatedRecordId: string;
  namePersonal: PersonalNameStructure;
}
interface PersonalNameStructure {
  namePersonal: string;
}

interface IndividualRecordForDisplay {
  xref: string;
  personalName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];
  public individualRecord?: IndividualRecord;
  public individualRecords?: IndividualRecord[];
  public individualRecordNames?: IndividualRecordForDisplay[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //this.getIndividualRecord("@I262590235338@");
    //this.getIndividualRecords();
    this.getIndividualRecordNames();
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
