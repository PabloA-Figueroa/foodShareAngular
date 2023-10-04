import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;



  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }
  commentError: string = '';
  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log('Login exitoso:', response);
        this.router.navigate(['/inicio']);
      })
      .catch(error => console.log(error));
      this.commentError = 'El email o la contraseña es incorrecta';


  }

  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
      .catch(error => console.log(error))
  }

}
