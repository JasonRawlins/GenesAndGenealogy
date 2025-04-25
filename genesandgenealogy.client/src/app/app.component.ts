import { Component, OnInit } from '@angular/core';
import { GedcomService } from './gedcom.service';
import { Profile } from '../entities/Profile';

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
    this.getProfile("@I322665662865@"); // JSD
  }

  getProfile(xrefINDI: string) {
    this.gedcomService.getProfile(xrefINDI).subscribe(
      (profileModel) => {
        this.profile = profileModel;
        //var codeTest = document.getElementById("code-test")
        //if (codeTest) { codeTest.innerHTML = JSON.stringify(this.profile.events[0].name); }
        //else { console.log("Couldn't find code-test") }
      },
      (error) => {
        console.error(error);
      });
  }

  title = "genesandgenealogy.client";
}
