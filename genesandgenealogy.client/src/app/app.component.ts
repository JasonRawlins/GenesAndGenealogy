import { Component, OnInit } from '@angular/core';
import { GedcomService } from './gedcom.service';
import { Profile } from '../view-models/Profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  providers: [GedcomService]
})

export class AppComponent implements OnInit {
  public profile?: Profile;

  constructor(private gedcomService: GedcomService) { }

  ngOnInit() {
    //this.getProfile("@I262590233314@"); // JSR
    this.getProfile("@I262590234298@"); // JSD
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
