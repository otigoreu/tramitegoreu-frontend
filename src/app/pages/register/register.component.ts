import { Component } from '@angular/core';
import { FooterComponent } from '../share/components/footer/footer.component';
import { HeaderComponent } from '../share/components/header/header.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {}
