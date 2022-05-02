import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-pag-principal',
  templateUrl: './pag-principal.component.html',
  styleUrls: ['./pag-principal.component.css']
})
export class PagPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(continentSelected:string,countrySelected:string, photo:string){
    globalThis.selectedCountry = countrySelected;
    globalThis.selectedContinent = continentSelected;
    globalThis.photo = photo;
  }
}
