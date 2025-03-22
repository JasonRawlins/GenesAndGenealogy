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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];
  public individualRecord?: string; // IndividualRecord;
  public someString = "default";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getForecasts();
    this.getIndividualRecord("@I262590235338@");
    this.getSomeString();
  }

  getSomeString() {
    this.http.get<string>('/weatherforecast/somestring/from-server').subscribe(
      (result) => {
        this.someString = (result as any).value;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getIndividualRecord(xrefINDI: string) {
    this.http.get<IndividualRecord>('/gedcom/individualrecord/' + xrefINDI).subscribe(
      (individualRecord) => {
        this.individualRecord = "After server call."; // individualRecord;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'genesandgenealogy.client';
}
