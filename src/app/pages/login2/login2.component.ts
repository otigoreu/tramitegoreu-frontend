import { Component } from '@angular/core';
import { HeaderComponent } from '../share/components/header/header.component';
import { FooterComponent } from '../share/components/footer/footer.component';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css',
})
export class Login2Component {}
