import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Juego } from '../juego';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  private _idJuego: string = "";

  // juego1: Juego = new Juego("MNC", "Minecraft", "Juego guay", "Markus Persson");
  // juego2: Juego = new Juego("WOW", "War of Warcraft", "Juego guay", "Markus Persson");
  //listaJuegos: Array<Juego> = [this.juego1 , this.juego2];

  constructor(route: ActivatedRoute){
    let listaJuegos: { id: string, name: string, descripcion: string, creador: string }[] = [
      { "id": "", "name": "Available", "descripcion": "string", "creador": "string" },
      { "id": "", "name": "Available", "descripcion": "string", "creador": "string" },
      { "id": "", "name": "Available", "descripcion": "string", "creador": "string" }
      
  ];
    this._idJuego = route.snapshot.params["id"];


  } 
} 
  


