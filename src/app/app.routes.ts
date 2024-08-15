import { Routes } from '@angular/router';
import { PersonComponent } from './pages/person/person.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: PersonComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
];
