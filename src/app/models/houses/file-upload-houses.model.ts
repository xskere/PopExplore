export class FileUploadHouses {
  key!: string;
  name!: string;
  url!: string;
  numHabitaciones!: string;
  precio!: string;
  localizacion!: string;
  file: File;
  constructor(file: File, numHabitaciones: string, precio: string, localizacion: string) {
    this.file = file;
    this.numHabitaciones = numHabitaciones;
    this.precio = precio;
    this.localizacion = localizacion;
  }
}
