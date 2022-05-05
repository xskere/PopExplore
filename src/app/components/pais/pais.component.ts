import {Component, NgIterable, OnInit} from '@angular/core';
import {FileUploadHouses} from "../../models/houses/file-upload-houses.model";
import {FileUploadService} from "../../services/casas/file-upload.service";
import {map} from "rxjs";



@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  selectedFiles?: FileList;
  currentFileUploadHouses?: FileUploadHouses;
  percentage = 0;
  countries?: NgIterable<any>;
  selectedCountry: any;
  selectedContinent: any;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.selectedContinent = window.sessionStorage.getItem("selectedContinent");
    this.selectedCountry = window.sessionStorage.getItem("selectedCountry");

    this.uploadService.getFiles("/continentes/"+this.selectedContinent+"/listaPaises",10).snapshotChanges().pipe(
      map(changes => // store key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.countries = fileUploads;
    });
  }
}
