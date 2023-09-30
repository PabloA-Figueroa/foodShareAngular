import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ReseniasComponent } from './resenias/resenias.component';
import {ReactiveFormsModule} from "@angular/forms";
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { UsuarioComponent } from './usuario/usuario.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    OfertasComponent,
    SobreNosotrosComponent,
    ReseniasComponent,
    RegistroComponent,
    LoginComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
