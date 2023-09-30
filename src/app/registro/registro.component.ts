import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RegistroService } from '../services/registro.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

// Validador personalizado para verificar si las contraseñas coinciden
function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('contraseña');
  const confirmPassword = control.get('confirmarContraseña');

  if (!password || !confirmPassword) {
    return null;
  }

  return password.value === confirmPassword.value ? null : { 'passwordMismatch': true };
}

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
    }, {
      validator: passwordMatchValidator // Aplicamos el validador personalizado
    });
  }

  async onSubmit() {
    this.submitted = true; // Marca el formulario como enviado al hacer clic en "Submit"

    if (this.formulario.valid) {
      const formData = this.formulario.value;

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
          contraseña: formData.contraseña,
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
      // El formulario no es válido, puedes mostrar mensajes de error cuando submitted sea true
    }
  }
}
