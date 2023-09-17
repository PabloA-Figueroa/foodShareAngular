import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, ROUTES} from "@angular/router";
import {InicioComponent} from "./inicio/inicio.component";
import {SobreNosotrosComponent} from "./sobre-nosotros/sobre-nosotros.component";
import {ReseniasComponent} from "./resenias/resenias.component";

const routes: Routes = [
  {path: 'Inicio', component : InicioComponent},
  {path: 'Sobre-Nosotros', component : SobreNosotrosComponent},
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
