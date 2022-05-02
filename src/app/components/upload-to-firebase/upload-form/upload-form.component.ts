import {Component, Input, OnInit} from '@angular/core';
import {FileUploadService} from "../../../services/casas/file-upload.service";
import {FileUploadHouses} from "../../../models/houses/file-upload-houses.model";

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent {
  @Input() selectedCountry!: any
  @Input() selectedContinent!: any;
  selectedFiles?: FileList;
  currentFileUploadHouses?: FileUploadHouses;
  percentage = 0;
  constructor(private uploadService: FileUploadService) { }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  upload(basePath: string, numHabitaciones: string, precio: string, localizacion: string): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      if (file) {
        this.currentFileUploadHouses = new FileUploadHouses(file, numHabitaciones, precio, localizacion);
        this.uploadService.pushFileToStorage(basePath, this.currentFileUploadHouses)
          .subscribe(
            percentage => {
              this.percentage = Math.round(percentage ? percentage : 0);
            },
            error => { console.log(error); }
          );
      }
    }
  }
}
