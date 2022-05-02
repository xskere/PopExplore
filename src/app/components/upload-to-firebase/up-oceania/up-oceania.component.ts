import {Component, NgIterable, OnInit} from '@angular/core';
import {FileUploadHouses} from "../../../models/houses/file-upload-houses.model";
import {FileUploadService} from "../../../services/casas/file-upload.service";
import {map} from "rxjs";

@Component({
  selector: 'app-up-oceania',
  templateUrl: './up-oceania.component.html',
  styleUrls: ['./up-oceania.component.css']
})
export class UpOceaniaComponent implements OnInit {
  continent = "Oceanía";
  selectedFiles?: FileList;
  currentFileUploadHouses?: FileUploadHouses;
  percentage = 0;
  countriesOceania?: NgIterable<any>;
  selectedCountry: any;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.uploadService.getFiles("/continentes/"+this.continent+"/listaPaises",10).snapshotChanges().pipe(
      map(changes => // store key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.countriesOceania = fileUploads;
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event;
  }

  selectCountry(event: any): void{
    this.selectedCountry = event;
  }


}
