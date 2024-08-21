import { Component, inject } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

import { RegisterRequestBody } from '../../model/auth';
import { Auth2Service } from '../../service/auth2.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  authService = inject(Auth2Service);

  registerForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });

  register() {
    const body: RegisterRequestBody = {
      firstName: this.registerForm.controls.firstName.value!,
      lastName: this.registerForm.controls.lastName.value!,
      password: this.registerForm.controls.password.value!,
      email: this.registerForm.controls.email.value!,
      confirmPassword: this.registerForm.controls.password.value!,
    };

    this.authService.register(body).subscribe((response) => {
      console.log('response', response);
      if (response && response.success) {
        // Redirect to the customer page
        console.log('Register successful');
        //this.notifications.success('Registro exitoso', 'Bienvenido');
      } else {
        // Display an error notification
        console.log('Register failed');
        // this.notifications.error('Registro fallido', 'Intenta otra vez');
      }
    });
  }
}
