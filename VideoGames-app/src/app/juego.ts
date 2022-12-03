export class Juego {
    private _id: string = "";
    private _nombre: string = "";
    private _descripcion: string = "";
    private _creador: string = "";
  

    public getId(): string {
        return this._id;
    }
    public setId(value: string) {
        this._id = value;
    }
    
    public getNombre(): string {
        return this._nombre;
    }
    public setNombre(value: string) {
        this._nombre = value;
    }
  
    public getDescripcion(): string {
        return this._descripcion;
    }
    public setDescripcion(value: string) {
        this._descripcion = value;
    }

    public getCreador(): string {
        return this._creador;
    }
    public setCreador(value: string) {
        this._creador = value;
    }
    
    constructor(id?: string, nombre?: string, descripcion?: string, creador?: string){
    //   this._id = id;
    //   this._nombre = nombre;
    //   this._descripcion = descripcion;
    //   this._creador = creador;
    }

 
  }
