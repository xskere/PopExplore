import {Component, NgIterable, OnInit} from '@angular/core';
import {FileUploadHouses} from "../../../models/houses/file-upload-houses.model";
import {FileUploadService} from "../../../services/casas/file-upload.service";
import {map} from "rxjs";

@Component({
  selector: 'app-up-europe',
  templateUrl: './up-europe.component.html',
  styleUrls: ['./up-europe.component.css']
})
export class UpEuropeComponent implements OnInit {
  continent = "Europa";
  selectedFiles?: FileList;
  currentFileUploadHouses?: FileUploadHouses;
  percentage = 0;
  countriesEurope?: NgIterable<any>;
  selectedCountry: any;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.uploadService.getFiles("/continentes/"+this.continent+"/listaPaises",10).snapshotChanges().pipe(
      map(changes => // store key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.countriesEurope = fileUploads;
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event;
  }

  selectCountry(event: any): void{
    this.selectedCountry = event;
  }


}
