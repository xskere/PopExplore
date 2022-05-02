import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/authentication/auth.service";
@Component({
  selector: 'app-verificar-cuenta',
  templateUrl: './verificar-cuenta.component.html',
  styleUrls: ['./verificar-cuenta.component.css']
})
export class VerificarCuentaComponent implements OnInit {
  constructor(public authService: AuthService) { }
  ngOnInit() {
  }
}
