
export class JuegoComponent {
  private _id: string = "";
  private _nombre: string = "";
  private _descripcion : string = "";
  private _creador : string = "";

  constructor(id: string, nombre: string, descripcion: string, creador: string){
    this._id = id;
    this._nombre = nombre;
    this._descripcion = descripcion;
    this._creador = creador;
  }
}
