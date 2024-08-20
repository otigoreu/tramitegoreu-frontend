import { Component } from '@angular/core';

import { FooterComponent } from '../shared/components/footer/footer.component';
import { AdminHeaderComponent } from '../shared/components/admin-header/admin-header.component';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [FooterComponent, AdminHeaderComponent],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css',
})
export class Login2Component {}
