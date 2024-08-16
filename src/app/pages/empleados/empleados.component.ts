import { Component } from '@angular/core';
import { HeaderComponent } from '../share/components/header/header.component';
import { FooterComponent } from '../share/components/footer/footer.component';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css',
})
export class EmpleadosComponent {}
