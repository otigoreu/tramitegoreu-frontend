import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl;
  private http = inject(HttpClient);
  private router = inject(Router);

  login(email: string, password: string) {
    const apiUrl = this.baseUrl + 'users/login';
    const body = { username: email, password };
    return this.http.post(apiUrl, body);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
