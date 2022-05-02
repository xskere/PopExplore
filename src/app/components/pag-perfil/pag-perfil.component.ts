import {Component, NgIterable} from '@angular/core';
import {UserUploadService} from "../../services/usuarios/user-upload.service";
import {map} from "rxjs";

interface Usuarios {
  id: Number;
  name: String;
  photo: String;
  userType: String;
  firstLikedCountry: String;
  secondLikedCountry: String;
  thirdLikedCountry: String;
  phone: String;
  houseOffered: String;
  description: String;
}

@Component({
  selector: 'app-pag-perfil',
  templateUrl: './pag-perfil.component.html',
  styleUrls: ['./pag-perfil.component.css']
})


export class PagPerfilComponent {
  userLogged: any;
  fileUploads?: NgIterable<any>;
  constructor(public userUploadService: UserUploadService) {
  }

  ngOnInit(): void {
    this.userUploadService.getFiles(10).snapshotChanges().pipe(
      map(changes => // store key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });

    this.userLogged = JSON.parse(localStorage.getItem('user')!);
  }

}
