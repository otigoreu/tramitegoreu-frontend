import { inject, Injectable } from '@angular/core';

import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Person, PersonNew, Persons } from '../model/person';

interface GetPersonsApiResponse {
  data: Persons[];
  success: string;
  errorMessage: string;
}

interface GetPersonApiResponse {
  data: Person;
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
      .get<GetPersonsApiResponse>(this.baseUrl + 'persons/nombre')
      .pipe(map((response) => response.data));
  }

  deletePerson(id: number) {
    return this.http.delete<DeletePersonResponse>(
      this.baseUrl + 'persons/' + id
    );
  }

  getPerson(id: number) {
    return this.http.get<GetPersonApiResponse>(this.baseUrl + 'persons/' + id);
  }

  edit(user: Persons) {
    return this.http.put(this.baseUrl + 'persons/' + user.id, {
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

  new(user: PersonNew) {
    return this.http.post(this.baseUrl + 'persons/', {
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
