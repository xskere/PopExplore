import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/authentication/auth.service";

@Component({
  selector: 'app-olvidar-cuenta',
  templateUrl: './olvidar-cuenta.component.html',
  styleUrls: ['./olvidar-cuenta.component.css']
})
export class OlvidarCuentaComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
