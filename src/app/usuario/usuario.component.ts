import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  userName: string = '';
  mail: string = '';
  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.userName = this.userService.getUserName();
    this.mail = this.userService.getUserEmail();
  }
}
