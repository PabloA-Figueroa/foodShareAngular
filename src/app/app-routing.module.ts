import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {InicioComponent} from "./inicio/inicio.component";
import {SobreNosotrosComponent} from "./sobre-nosotros/sobre-nosotros.component";
import {ReseniasComponent} from "./resenias/resenias.component";
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { canActivate,redirectUnauthorizedTo} from '@angular/fire/auth-guard'


const routes: Routes = [


  {path: '',pathMatch:'full',redirectTo:'/inicio'},
  {path: 'inicio',
  component:InicioComponent,
  ...canActivate(()=> redirectUnauthorizedTo(['/registro']))},
  {path:'registro', component:RegistroComponent},
  {path:'login',component:LoginComponent},
  {path: 'Inicio', component : InicioComponent},
  {path: 'Sobre-Nosotros', component : SobreNosotrosComponent},
  {path: 'Resenias', component : ReseniasComponent}


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
