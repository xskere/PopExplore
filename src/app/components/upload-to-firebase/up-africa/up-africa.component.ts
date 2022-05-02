import {Component, NgIterable, OnInit} from '@angular/core';
import {map} from "rxjs";
import {FileUploadService} from "../../../services/casas/file-upload.service";
import {FileUploadHouses} from "../../../models/houses/file-upload-houses.model";

@Component({
  selector: 'app-up-africa',
  templateUrl: './up-africa.component.html',
  styleUrls: ['./up-africa.component.css']
})
export class UpAfricaComponent implements OnInit {
  continent = "África";
  selectedFiles?: FileList;
  currentFileUploadHouses?: FileUploadHouses;
  percentage = 0;
  countriesAfrica?: NgIterable<any>;
  selectedCountry: any;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.uploadService.getFiles("/continentes/África/listaPaises",10).snapshotChanges().pipe(
      map(changes => // store key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.countriesAfrica = fileUploads;
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event;
  }

  selectCountry(event: any): void{
    this.selectedCountry = event;
  }


}
