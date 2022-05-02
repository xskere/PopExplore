import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { environment } from '../environments/environment';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListaCasasComponent } from './components/lista-casas/lista-casas.component';
import { PagPrincipalComponent } from './components/pag-principal/pag-principal.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagPerfilComponent } from './components/pag-perfil/pag-perfil.component';
import { ListaPaisesComponent } from './components/lista-paises/lista-paises.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { RegistrarCuentaComponent } from './components/registrar-cuenta/registrar-cuenta.component';
import { OlvidarCuentaComponent } from './components/olvidar-cuenta/olvidar-cuenta.component';
import { PaisComponent } from './components/pais/pais.component';
import { ReservaCasaComponent } from './components/reserva-casa/reserva-casa.component';
import { CasaReservadaComponent } from './components/casa-reservada/casa-reservada.component';
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import { UploadFormComponent } from './components/upload-to-firebase/upload-form/upload-form.component';
import { UploadHouseComponent } from './components/upload-to-firebase/upload-house/upload-house.component';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AuthService} from "./services/authentication/auth.service";
import { VerificarCuentaComponent } from './components/verificar-cuenta/verificar-cuenta.component';
import { UpEuropeComponent } from './components/upload-to-firebase/up-europe/up-europe.component';
import { UpAsiaComponent } from './components/upload-to-firebase/up-asia/up-asia.component';
import { UpAmericaComponent } from './components/upload-to-firebase/up-america/up-america.component';
import { UpOceaniaComponent } from './components/upload-to-firebase/up-oceania/up-oceania.component';
import { UpAfricaComponent } from './components/upload-to-firebase/up-africa/up-africa.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaCasasComponent,
    PagPrincipalComponent,
    FooterComponent,
    PagPerfilComponent,
    ListaPaisesComponent,
    IniciarSesionComponent,
    RegistrarCuentaComponent,
    OlvidarCuentaComponent,
    PaisComponent,
    ReservaCasaComponent,
    CasaReservadaComponent,
    UploadFormComponent,
    UploadHouseComponent,
    VerificarCuentaComponent,
    UpEuropeComponent,
    UpAsiaComponent,
    UpAmericaComponent,
    UpOceaniaComponent,
    UpAfricaComponent
  ],
    imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        BrowserModule,
        AppRoutingModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        FormsModule
    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }


