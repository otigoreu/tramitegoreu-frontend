import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { PersonComponent } from './pages/person/person.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TramiteGoreu-FrontEnd';
}
