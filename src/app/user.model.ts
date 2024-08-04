export interface UserDataPersons {
  id: number;
  nombres: string;
  apellidos: string;
  fechaNac: string;
  direccion: string;
  referencia: string;
  email: string;
  tipoDoc: string;
  nroDoc: string;
  status: string;
}

export interface UserDataPerson {
  id: number;
  nombres: string;
  apellidos: string;
  fechaNac: string;
  direccion: string;
  referencia: string;
  email: string;
  tipoDoc: string;
  nroDoc: string;
  status: boolean;
}
