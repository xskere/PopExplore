import {Component, NgIterable, OnInit} from '@angular/core';
import {FileUploadService} from "../../services/casas/file-upload.service";
import {count, map} from "rxjs";
import {PaisComponent} from "../pais/pais.component";


@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css']
})
export class ListaPaisesComponent implements OnInit {
  countriesAfrica?: NgIterable<any>;
  countriesEurope?: NgIterable<any>;
  countriesOceania?: NgIterable<any>;
  countriesAsia?: NgIterable<any>;
  countriesAmerica?: NgIterable<any>;
  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.uploadService.getFiles("/continentes/África/listaPaises",10).snapshotChanges().pipe(
      map(changes => // store key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.countriesAfrica = fileUploads;
    });


    this.uploadService.getFiles("/continentes/Oceanía/listaPaises",10).snapshotChanges().pipe(
      map(changes => // store key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.countriesOceania = fileUploads;
    });


    this.uploadService.getFiles("/continentes/Europa/listaPaises",10).snapshotChanges().pipe(
      map(changes => // store key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.countriesEurope = fileUploads;
    });


    this.uploadService.getFiles("/continentes/América/listaPaises",10).snapshotChanges().pipe(
      map(changes => // store key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.countriesAmerica = fileUploads;
    });


    this.uploadService.getFiles("/continentes/Asia/listaPaises",10).snapshotChanges().pipe(
      map(changes => // store key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.countriesAsia = fileUploads;
    });
  }

  onSelect(continentSelected:string,countrySelected:string, photo:string){
    window.sessionStorage.setItem("selectedCountry", countrySelected);
    window.sessionStorage.setItem("selectedContinent", continentSelected);
    window.sessionStorage.setItem("photo", photo);
  }

}
