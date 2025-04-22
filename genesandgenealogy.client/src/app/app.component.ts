import { Component, OnInit } from '@angular/core';
import { GedcomService } from './gedcom.service';
import { ProfileModel } from '../view-models/ProfileModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  providers: [GedcomService]
})

export class AppComponent implements OnInit {
  public profile?: ProfileModel;

  constructor(private gedcomService: GedcomService) { }

  ngOnInit() {
    this.getProfile("@I262590233314@"); // JS
  }

  getProfile(xrefINDI: string) {
    this.gedcomService.getProfile(xrefINDI).subscribe(
      (profileModel) => {
        this.profile = profileModel;
      },
      (error) => {
        console.error(error);
      });
  }

  title = "genesandgenealogy.client";
}
