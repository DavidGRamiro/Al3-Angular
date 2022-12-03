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
  public juego = new Juego();

  juego1: Juego = new Juego("MNC", "Minecraft", "Juego guay", "Markus Persson");
  juego2: Juego = new Juego("WOW", "War of Warcraft", "Juego guay", "Markus Persson");
  //listaJuegos: Array<Juego> = [this.juego1 , this.juego2];

  constructor(route: ActivatedRoute){
  this._idJuego = route.snapshot.params["id"];

  switch((this._idJuego)) { 
    case (this.juego1.getId): { 
       this.juego = this.juego1
       break; 
    } 
    case (this.juego2.getId): { 
      this.juego = this.juego2
       break; 
    } 
    default: { 
       //statements; 
       break; 
    } 
 } 
  }

  

// function getjuegoById(id: string){
//   juego: Juego;
//   for ()

//   return {juego}

}





}
