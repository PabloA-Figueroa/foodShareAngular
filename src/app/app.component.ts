import { Component } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import User = firebase.User;
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngulaRFoodShrare';
  constructor(private afAuth: AngularFireAuth, private userService: UserService) {}

  ngOnInit() {
    this.afAuth.user.subscribe(user => {
      if (user) {
        // Actualiza el nombre y el correo electrónico en el servicio de usuario
        this.userService.setUserName(user.displayName || '');
        this.userService.setUserEmail(user.email || '');
      }
    });
  }
}
