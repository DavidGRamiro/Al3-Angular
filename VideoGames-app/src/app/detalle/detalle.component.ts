import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __importStar } from 'tslib';
import { Juego } from '../juego';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  private _idJuego: string = "";
  public juego = new Juego();
  constructor(route: ActivatedRoute){
    this._idJuego = route.snapshot.params["id"];
    console.log(this._idJuego);

    let listaJuegos: { id: string, nombre: string, descripcion: string, creador: string }[] = [
      { "id": "MNC", "nombre": "Minecraft", "descripcion": "Juego guay", "creador": "Markus Persson" },
      { "id": "GTA", "nombre": "Grand Theft Auto", "descripcion": "Juego guay", "creador": "Markus Persson" },
      { "id": "LOL", "nombre": "League of Legends", "descripcion": "Juego guay", "creador": "Markus Persson" },
      { "id": "COD", "nombre": "Call of Duty", "descripcion": "Juego guay", "creador": "Markus Persson" },
      { "id": "WOW", "nombre": "War of Warcraft", "descripcion": "Juego guay", "creador": "Markus Persson" },
      { "id": "LOU", "nombre": "The Last of Us", "descripcion": "Juego guay", "creador": "Markus Persson" }
      
    ];

    for(let i=0; i<listaJuegos.length; i++){
       if ((listaJuegos[i].id) === this._idJuego){
        this.juego.setId(listaJuegos[i].id);
        this.juego.setNombre(listaJuegos[i].nombre);
        this.juego.setDescripcion(listaJuegos[i].descripcion);
        this.juego.setCreador(listaJuegos[i].creador);
       };
      }
    }

  // public juego = new Juego();
  // juego1: Juego = new Juego("MNC", "Minecraft", "Juego guay", "Markus Persson");
  // juego2: Juego = new Juego("WOW", "War of Warcraft", "Juego guay", "Markus Persson");
  //listaJuegos: Array<Juego> = [this.juego1 , this.juego2];
  // let listaJuegos1: { juego: Juego }[];


  
} 
  


