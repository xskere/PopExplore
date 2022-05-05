import {Component, NgIterable, OnInit} from '@angular/core';
import {AuthService} from "../../services/authentication/auth.service";
import {UserUploadService} from "../../services/usuarios/user-upload.service";
import {map} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLogged: any;
  fileUploads?: NgIterable<any>;
  constructor(public userUploadService: UserUploadService, public authService: AuthService) {
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

  output(userEmail: string){
    console.log("User logged is: " + this.userLogged.email + " and user is: " + userEmail);
  }

  headerAppear(userEmail: string, index: number){
    return (!this.authService.isLoggedIn && index===0) || (userEmail === this.userLogged.email);

  }

}
