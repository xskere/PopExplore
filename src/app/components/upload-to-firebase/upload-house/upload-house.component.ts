import {Component, NgIterable, OnInit} from '@angular/core';
import {FileUploadService} from "../../../services/casas/file-upload.service";
import {map} from "rxjs";
import {FileUploadHouses} from "../../../models/houses/file-upload-houses.model";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-upload-house',
  templateUrl: './upload-house.component.html',
  styleUrls: ['./upload-house.component.css']
})
export class UploadHouseComponent implements OnInit{

  constructor(public router: Router) { }

  ngOnInit(): void {

  }

}
