export class Juego {
    private _id: string = "";
    private _nombre: string = "";
    private _company: string = "";
    private _valoracion: string = "";
    private _image: string = "";

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
  
    public getCompany(): string {
        return this._company;
    }
    public setCompany(value: string) {
        this._company = value;
    }

    public getValoracion(): string {
        return this._valoracion;
    }
    public setValoracion(value: string) {
        this._valoracion = value;
    }
    
    public getImage(): string {
        return this._image;
    }
    public setImage(value: string) {
        this._image = value;
    }

    constructor(_id?: string, _nombre?: string, _company?: string, _valoracion?: string, _image?: string){
    }

 
  }
