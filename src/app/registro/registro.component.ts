import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Registro from '../../interfaces/registro.interfaces';
import { RegistroService } from '../services/registro.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private registroService: RegistroService,
    private userService: UserService,
    private router:Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      email: new FormControl(),
      contraseña: new FormControl(),
      confirmarContraseña: new FormControl()
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    if (this.formulario.valid) {
      // Verificar que el formulario sea válido antes de enviar los datos

      const formData = this.formulario.value as Registro; // Asegúrate de que la interfaz Registro sea correcta


      // Verifica si las contraseñas coinciden
      if (formData.contraseña !== formData.confirmarContraseña) {
        console.error('Las contraseñas no coinciden');
        return; // No envíes el formulario si las contraseñas no coinciden
      }


      try {
        // Envía solo el campo de contraseña a Firebase
        const response = await this.userService.registro({
          email: formData.email,
          password: formData.contraseña
        });

        // Verifica si las contraseñas coinciden
        if (formData.contraseña !== formData.confirmarContraseña) {
          console.error('Las contraseñas no coinciden');
          return; // No envíes el formulario si las contraseñas no coinciden
        }

        // Llama a la función para agregar el registro en Firestore
        await this.registroService.addRegistro({
          nombre: formData.nombre,
          email: formData.email,
          contraseña: formData.contraseña, // O proporciona un valor predeterminado aquí
          confirmarContraseña: formData.confirmarContraseña

        });

        console.log('Registro en Firebase exitoso:', response);
        this.router.navigate(['/login']);
        // Realiza cualquier acción adicional después de registrar al usuario en Firebase
      } catch (error) {
        console.error('Error en el registro de usuario en Firebase:', error);
        // Maneja el error de registro en Firebase aquí
      }

    } else {
      // El formulario no es válido, puedes mostrar mensajes de error o tomar otras acciones
    }
  }

}
