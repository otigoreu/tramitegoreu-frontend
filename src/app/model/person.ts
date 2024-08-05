export interface Persons {
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

export interface Person {
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
export interface PersonNew {
  nombres: string;
  apellidos: string;
  fechaNac: string;
  direccion: string;
  referencia: string;
  email: string;
  tipoDoc: string;
  nroDoc: string;
}
