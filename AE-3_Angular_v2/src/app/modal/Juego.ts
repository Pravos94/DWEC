export class Juego {
  identificador: number | undefined;
  titulo: string | undefined;
  compania: string | undefined;
  imagen: string | undefined;
  valoracion: string | undefined;

  constructor(
    identificador: number | undefined,
    titulo: string | undefined,
    compania: string | undefined,
    imagen: string | undefined,
    valoracion: string | undefined
  ) {
    this.identificador = identificador;
    this.titulo = titulo;
    this.compania = compania;
    this.imagen = imagen;
    this.valoracion = valoracion;
  }
}
