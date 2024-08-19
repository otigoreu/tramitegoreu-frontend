import { Routes } from '@angular/router';
import { PersonComponent } from './pages/person/person.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { Login2Component } from './pages/login2/login2.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

export const routes: Routes = [
  {
    path: '',
    component: PersonComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
];
//53:03
// export const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     redirectTo: '/home',
//   },
//   {
//     path: 'home',
//     pathMatch: 'full',
//     loadComponent: () =>
//       import('../../src/app/pages/home/home.component').then(
//         (m) => m.HomeComponent
//       ),
//   },
//   {
//     path: 'login',
//     pathMatch: 'full',
//     loadComponent: () =>
//       import('../../src/app/pages/login2/login2.component').then(
//         (m) => m.Login2Component
//       ),
//   },
//   {
//     path: 'register',
//     pathMatch: 'full',
//     loadComponent: () =>
//       import('../../src/app/pages/register/register.component').then(
//         (m) => m.RegisterComponent
//       ),
//   },
//   {
//     path: 'forgot-password',
//     pathMatch: 'full',
//     loadComponent: () =>
//       import(
//         '../../src/app/pages/forgot-password/forgot-password.component'
//       ).then((m) => m.ForgotPasswordComponent),
//   },
// ];
