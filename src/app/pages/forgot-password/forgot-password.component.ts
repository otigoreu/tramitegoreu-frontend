import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../share/components/header/header.component';
import { FooterComponent } from '../share/components/footer/footer.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {}
