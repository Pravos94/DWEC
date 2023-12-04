export class Juego {
  identificador: number | undefined;
  titulo: string | undefined;
  compañia: string | undefined;
  imagen: string | undefined;
  valoracion: string | undefined;

  constructor(
    identificador: number | undefined,
    titulo: string | undefined,
    compañia: string | undefined,
    imagen: string | undefined,
    valoracion: string | undefined
  ) {
    this.identificador = identificador;
    this.titulo = titulo;
    this.compañia = compañia;
    this.imagen = imagen;
    this.valoracion = valoracion;
  }
}
