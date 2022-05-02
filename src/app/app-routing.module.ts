import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCasasComponent } from './components/lista-casas/lista-casas.component';
import { PagPrincipalComponent } from './components/pag-principal/pag-principal.component';
import { PagPerfilComponent } from './components/pag-perfil/pag-perfil.component';
import { ListaPaisesComponent } from './components/lista-paises/lista-paises.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { RegistrarCuentaComponent } from './components/registrar-cuenta/registrar-cuenta.component';
import { OlvidarCuentaComponent } from './components/olvidar-cuenta/olvidar-cuenta.component';
import { PaisComponent } from './components/pais/pais.component';
import { ReservaCasaComponent } from './components/reserva-casa/reserva-casa.component';
import { CasaReservadaComponent } from './components/casa-reservada/casa-reservada.component';
import {UploadHouseComponent} from "./components/upload-to-firebase/upload-house/upload-house.component";
import {VerificarCuentaComponent} from "./components/verificar-cuenta/verificar-cuenta.component";

import { AuthGuard } from './guard/auth.guard';
import {UpAfricaComponent} from "./components/upload-to-firebase/up-africa/up-africa.component";
import {UpEuropeComponent} from "./components/upload-to-firebase/up-europe/up-europe.component";
import {UpAsiaComponent} from "./components/upload-to-firebase/up-asia/up-asia.component";
import {UpAmericaComponent} from "./components/upload-to-firebase/up-america/up-america.component";
import {UpOceaniaComponent} from "./components/upload-to-firebase/up-oceania/up-oceania.component";
const routes: Routes = [
  {
    path: 'home',
    component: PagPrincipalComponent
  },
  {
    path: 'listaCasas',
    component: ListaCasasComponent
  },
  {
    path: 'perfilUsuario',
    component: PagPerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listaPaises',
    component: ListaPaisesComponent
  },
  {
    path: 'login',
    component: IniciarSesionComponent
  },
  {
    path: 'registrar',
    component: RegistrarCuentaComponent
  },
  {
    path: 'forgot',
    component: OlvidarCuentaComponent
  },
  {
    path: 'pais',
    component: PaisComponent
  },
  {
    path: 'reservarCasa',
    component: ReservaCasaComponent
  },
  {
    path: 'reservado',
    component: CasaReservadaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'upload',
    component: UploadHouseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'upload/africa',
    component: UpAfricaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'upload/europe',
    component: UpEuropeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'upload/asia',
    component: UpAsiaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'upload/america',
    component: UpAmericaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'upload/oceania',
    component: UpOceaniaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'verify',
    component: VerificarCuentaComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
