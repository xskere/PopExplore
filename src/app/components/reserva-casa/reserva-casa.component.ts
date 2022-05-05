import {Component, NgIterable, OnInit} from '@angular/core';
import {FileUploadHouses} from "../../models/houses/file-upload-houses.model";
import {FileUploadService} from "../../services/casas/file-upload.service";
import {map} from "rxjs";

@Component({
  selector: 'app-reserva-casa',
  templateUrl: './reserva-casa.component.html',
  styleUrls: ['./reserva-casa.component.css']
})
export class ReservaCasaComponent implements OnInit {
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
    this.selectedContinent = window.sessionStorage.getItem("selectedContinent");
    this.selectedCountry = window.sessionStorage.getItem("selectedCountry");
    this.photo = window.sessionStorage.getItem("photo");
    this.selectedHouse = window.sessionStorage.getItem("selectedHouse");

    this.uploadService.getFiles("/continentes/"+this.selectedContinent+"/listaPaises/" +this.selectedCountry+"/listaCasas/",10).snapshotChanges().pipe(
      map(changes => // store key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.houses = fileUploads;
    });
  }
}
