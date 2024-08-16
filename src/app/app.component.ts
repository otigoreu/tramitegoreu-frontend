import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { Login2Component } from './pages/login2/login2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Login2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TramiteGoreu-FrontEnd';
}
