import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from '../services/registro.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  formulario: FormGroup;
  submitted: boolean = false; // Variable para rastrear si se ha enviado el formulario

  constructor(
    private registroService: RegistroService,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContraseña: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.submitted = true; // Marca el formulario como enviado al hacer clic en "Submit"

    if (this.formulario.valid) {
      const formData = this.formulario.value;

      // Verifica si las contraseñas coinciden
      if (formData.contraseña !== formData.confirmarContraseña) {
        console.error('Las contraseñas no coinciden');
        return;
      }

      try {
        // Registra al usuario en Firebase
        const response = await this.userService.registro({
          email: formData.email,
          password: formData.contraseña
        });

        // Verifica si el registro del usuario fue exitoso
        if (response && response.user) {
          // Llama al servicio para agregar el registro en Firestore
          await this.registroService.addRegistro({
            nombre: formData.nombre,
            email: formData.email,
            contraseña: formData.contraseña,
            confirmarContraseña: formData.confirmarContraseña
          });

          console.log('Registro en Firebase exitoso:', response.user);
          this.router.navigate(['/login']);
        } else {
          console.error('Registro en Firebase fallido');
        }
      } catch (error) {
        console.error('Error en el registro de usuario en Firebase:', error);
        // Maneja el error de registro en Firebase aquí
      }
    } else {
      // El formulario no es válido, puedes mostrar mensajes de error cuando submitted sea true
    }
  }
}
