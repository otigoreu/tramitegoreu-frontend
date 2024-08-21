import { Component, inject } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { Auth2Service } from '../../service/auth2.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  authService = inject(Auth2Service);

  onSubmit(email: string) {
    this.authService.forgotPassword(email).subscribe((response) => {
      console.log('response', response);
      if (response.success) {
        console.log('Success');
      } else {
        console.log('Fail');
      }
    });
  }
}
