import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomDateAdapter } from '../../../material/custom-adapter';
import { AppService } from '../../../service/person-service.service';
import { Personas } from '../../../model/persona';

@Component({
  selector: 'app-edit-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: DateAdapter, useClass: CustomDateAdapter },
  ],
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.css',
})
export class EditDialogComponent implements OnInit {
  editForm = new FormGroup({
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl(''),
    fechaNac: new FormControl(new Date()),
    direccion: new FormControl(''),
    referencia: new FormControl(''),
    celular: new FormControl(''),
    edad: new FormControl(''),
    email: new FormControl(''),
    tipoDoc: new FormControl(''),
    nroDoc: new FormControl(''),
  });

  data = inject(MAT_DIALOG_DATA);
  dialog = inject(MatDialogRef);

  appService = inject(AppService);

  ngOnInit(): void {
    this.appService.getPerson(this.data.personId).subscribe((response) => {
      const anio = Number.parseInt(response.data.fechaNac.split('-')[0]);
      const mes = Number.parseInt(response.data.fechaNac.split('-')[1]) - 1;
      const dia = Number.parseInt(response.data.fechaNac.split('-')[2]);
      const fechaFormateada = new Date(anio, mes, dia);
      this.editForm.patchValue({
        nombres: response.data.nombres,
        apellidos: response.data.apellidos,
        fechaNac: fechaFormateada,
        direccion: response.data.direccion,
        referencia: response.data.referencia,
        celular: response.data.celular,
        edad: response.data.edad,
        email: response.data.email,
        tipoDoc: response.data.tipoDoc,
        nroDoc: response.data.nroDoc,
      });
    });
  }

  savePerson() {
    const fecha =
      this.editForm.controls.fechaNac.value!.getDate() +
      '/' +
      (this.editForm.controls.fechaNac.value!.getMonth() + 1) +
      '/' +
      this.editForm.controls.fechaNac.value!.getFullYear();
    const user: Personas = {
      id: this.data.personId,
      nombres: this.editForm.controls.nombres.value!,
      apellidos: this.editForm.controls.apellidos.value!,
      fechaNac: fecha,
      direccion: this.editForm.controls.direccion.value!,
      referencia: this.editForm.controls.referencia.value!,
      celular: this.editForm.controls.celular.value!,
      edad: this.editForm.controls.edad.value!,
      email: this.editForm.controls.email.value!,
      tipoDoc: this.editForm.controls.tipoDoc.value!,
      nroDoc: this.editForm.controls.nroDoc.value!,
      status: '',
    };
    this.appService.edit(user).subscribe(() => {
      this.dialog.close();
    });
  }
}
