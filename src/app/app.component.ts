import { RouterOutlet } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { Login2Component } from './pages/login2/login2.component';
import {
  NotificationsService,
  Options,
  SimpleNotificationsModule,
} from 'angular2-notifications';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Login2Component, SimpleNotificationsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TramiteGoreu-FrontEnd';
  notificationsOptions: Options = {
    position: ['top', 'right'],
    timeOut: 3000,
  };
}
