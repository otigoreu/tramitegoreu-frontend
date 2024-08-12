import { inject, Injectable } from '@angular/core';

import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Persona, PersonaNew, Personas } from '../model/persona';

interface GetPersonsApiResponse {
  data: Personas[];
  success: string;
  errorMessage: string;
}

interface GetPersonApiResponse {
  data: Persona;
  success: string;
  errorMessage: string;
}

interface DeletePersonResponse {
  success: string;
  errorMessage: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  baseUrl = 'https://localhost:7230/api/';

  http = inject(HttpClient);

  getData() {
    return this.http
      .get<GetPersonsApiResponse>(this.baseUrl + 'personas/nombre')
      .pipe(map((response) => response.data));
  }

  deletePerson(id: number) {
    return this.http.delete<DeletePersonResponse>(
      this.baseUrl + 'personas/' + id
    );
  }

  getPerson(id: number) {
    return this.http.get<GetPersonApiResponse>(this.baseUrl + 'personas/' + id);
  }

  edit(user: Personas) {
    return this.http.put(this.baseUrl + 'personas/' + user.id, {
      nombres: user.nombres,
      apellidos: user.apellidos,
      fechaNac: user.fechaNac,
      direccion: user.direccion,
      referencia: user.referencia,
      email: user.email,
      tipoDoc: user.tipoDoc,
      nroDoc: user.nroDoc,
    });
  }

  new(user: PersonaNew) {
    return this.http.post(this.baseUrl + 'personas/', {
      nombres: user.nombres,
      apellidos: user.apellidos,
      fechaNac: user.fechaNac,
      direccion: user.direccion,
      referencia: user.referencia,
      email: user.email,
      tipoDoc: user.tipoDoc,
      nroDoc: user.nroDoc,
    });
  }
}
