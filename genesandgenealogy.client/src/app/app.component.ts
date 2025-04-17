import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { FamilyModel } from '../view-models/FamilyModel';
import { IndividualModel } from '../view-models/IndividualModel';
import { GedcomService } from './gedcom.service';
import * as Ancestry from '../common/Ancestry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  providers: [GedcomService]
})

export class AppComponent implements OnInit {
  public individual?: IndividualModel;
  public families: FamilyModel[] = [];
  //public familyRecords: FamilyRecord[] = [];
  public individuals: IndividualModel[] = [];
  public Ancestry = Ancestry;

  constructor(private gedcomService: GedcomService) { }

  ngOnInit() {
    //this.getIndividualRecord("@I262590234298@"); // JSD
    //this.getIndividualRecord("@I262590234257@"); // B
    this.getIndividual("@I262590233314@"); // JS

    //this.getIndividualRecords();
  }

  getIndividuals() {
    this.gedcomService.getIndividuals().subscribe(
      (individuals) => {
        this.individuals = individuals;
      }
    );
  }

  getIndividual(xrefINDI: string) {
    this.gedcomService.getIndividual(xrefINDI).pipe(
      switchMap(individual => {
        this.individual = individual;
        return this.gedcomService.getIndividualFamilies(individual.xref);
      })
    ).subscribe(families => {
      this.families = families;
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
