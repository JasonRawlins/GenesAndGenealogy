import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { IndividualRecord } from '../gedcom/individual-record';
import { FamilyRecord } from '../gedcom/family-record';
import { FamilyModel } from '../view-models/FamilyModel';
import { IndividualModel } from '../view-models/IndividualModel';
import { GedcomService } from './gedcom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  providers: [GedcomService]
})

export class AppComponent implements OnInit {
  public individualRecord?: IndividualRecord;
  public familyModels: FamilyModel[] = [];
  //public familyRecords: FamilyRecord[] = [];
  public individualRecords: IndividualRecord[] = [];
  public individualRecordNames: IndividualModel[] = [];

  constructor(private gedcomService: GedcomService) { }

  ngOnInit() {
    this.getIndividualRecord("@I262590234298@");

    //this.getIndividualRecords();
  }

  getIndividualRecords() {
    this.gedcomService.getIndividualRecords().subscribe(
      (individualRecords) => {
        this.individualRecords = individualRecords;
      }
    );
  }

  getIndividualRecord(xrefINDI: string) {
    this.gedcomService.getIndividualRecord(xrefINDI).pipe(
      switchMap(individualRecord => {
        this.individualRecord = individualRecord;
        return this.gedcomService.getIndividualFamilyRecords(individualRecord.xref);
      })
    ).subscribe(familyModels => {
      this.familyModels = familyModels;
    });
  }

  //getFamilyRecord(xrefFAM: string) {
  //  this.gedcomService.getFamilyRecord(xrefFAM).subscribe(
  //    (familyRecord) => {
  //      this.familyRecords.push(familyRecord);
  //    },
  //    (error) => {
  //      console.error(error)
  //    }
  //  );
  //}

  title = "genesandgenealogy.client";
}
