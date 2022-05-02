import {Component, NgIterable, OnInit} from '@angular/core';
import {FileUploadHouses} from "../../models/houses/file-upload-houses.model";
import {FileUploadService} from "../../services/casas/file-upload.service";
import {map} from "rxjs";

@Component({
  selector: 'app-casa-reservada',
  templateUrl: './casa-reservada.component.html',
  styleUrls: ['./casa-reservada.component.css']
})
export class CasaReservadaComponent implements OnInit {
  selectedFiles?: FileList;
  currentFileUploadHouses?: FileUploadHouses;
  percentage = 0;
  houses?: NgIterable<any>;
  selectedCountry: any;
  selectedContinent: any;
  selectedHouse: any;
  photo: any;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.selectedContinent = globalThis.selectedContinent;
    this.selectedCountry = globalThis.selectedCountry;
    this.photo = globalThis.photo;
    this.selectedHouse = globalThis.selectedHouse;

    this.uploadService.getFiles("/continentes/"+this.selectedContinent+"/listaPaises/" +this.selectedCountry+"/listaCasas/",10).snapshotChanges().pipe(
      map(changes => // store key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.houses = fileUploads;
    });
  }
}
