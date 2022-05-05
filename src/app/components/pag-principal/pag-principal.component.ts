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
    window.sessionStorage.setItem("selectedContinent", continentSelected);
    window.sessionStorage.setItem("selectedCountry", countrySelected);
    window.sessionStorage.setItem("photo", photo);
  }
}
