import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  userName: string = '';
  email: string = '';
  pedidos: any[] = [];
  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.userName = this.userService.getUserName();
    this.email = this.userService.getUserEmail();

    // Simula la obtención de datos de pedidos (puedes cargar datos reales aquí)
    this.pedidos = [
      { fecha: '2023-09-15', descripcion: 'Pedido 1' },
      { fecha: '2023-09-20', descripcion: 'Pedido 2' },
      { fecha: '2023-09-25', descripcion: 'Pedido 3'},
      { fecha: '2023-09-25', descripcion: 'Pedido 3' },
      { fecha: '2023-09-25', descripcion: 'Pedido 3' },
      { fecha: '2023-09-25', descripcion: 'Pedido 3' }
    ];
  }
}
