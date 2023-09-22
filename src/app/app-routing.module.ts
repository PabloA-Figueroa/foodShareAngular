import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {InicioComponent} from "./inicio/inicio.component";
import {SobreNosotrosComponent} from "./sobre-nosotros/sobre-nosotros.component";
import {ReseniasComponent} from "./resenias/resenias.component";
import {NewPlaceComponent} from "./new-place/new-place.component";

const routes: Routes = [
  {path: 'Inicio', component : InicioComponent},
  {path: 'Sobre-Nosotros', component : SobreNosotrosComponent},
  {path: 'newPlace', component : NewPlaceComponent},
  {path: 'Resenias', component : ReseniasComponent},
  {path: '', redirectTo: '/Inicio', pathMatch: 'full'},
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
