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
import { NewPlaceComponent } from './new-place/new-place.component';
import {ReactiveFormsModule} from "@angular/forms";
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { PlaceListComponent } from './place-list/place-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    OfertasComponent,
    SobreNosotrosComponent,
    ReseniasComponent,
    NewPlaceComponent,
    PlaceListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
