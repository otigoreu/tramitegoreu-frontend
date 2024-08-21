import { Component, inject } from '@angular/core';

import { FooterComponent } from '../shared/components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NotificationsService } from 'angular2-notifications';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from '../shared/components/header/header.component';
import { Auth2Service } from '../../service/auth2.service';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [
    FooterComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
    HeaderComponent,
  ],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css',
})
export class Login2Component {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  authService = inject(Auth2Service);
  router = inject(Router);
  //notifications = inject(NotificationsService);

  login() {
    const email = this.loginForm.controls.email.value!;
    const password = this.loginForm.controls.password.value!;
    this.authService.login(email, password).subscribe((response) => {
      console.log('response', response);
      if (response && response.success) {
        localStorage.setItem('token', response.data.token);
        // this.authService.loggedIn.set(true);
        // this.notifications.success(
        //   'Login Exitoso',
        //   'Bienvenido a Musical Events'
        // );
        // const isAdministrator = email === 'admin@gmail.com';
        // this.authService.isAdministrator.set(isAdministrator);
        // localStorage.setItem('isAdministrator', isAdministrator.toString());
        // this.router.navigate([isAdministrator ? '/admin' : '/customer']);
        this.router.navigate(['/home']);
        console.log('login successful');
      } else {
        // this.notifications.error('Login Fallido', 'Revisa tus credenciales');
        console.log('login falied');
      }
    });
  }
}
