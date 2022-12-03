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

    let listaJuegos: { id: string, nombre: string, company: string, valoracion: string, image: string }[] = [
      { "id": "MNC", "nombre": "Minecraft", "company": "Mojang Studios", "valoracion": "4.5", "image": "../assets/Pictures/MNC.jpg" },
      { "id": "GTA", "nombre": "Grand Theft Auto", "company": "DMA Design", "valoracion": "3.7", "image": "/assets/Pictures/GTA.jpg" },
      { "id": "LOL", "nombre": "League of Legends", "company": "Riot Games", "valoracion": "3.6", "image": "/assets/Pictures/LOL.jpg" },
      { "id": "COD", "nombre": "Call of Duty", "company": "Infinity Ward Games", "valoracion": "2.4", "image": "/assets/Pictures/COD.jpg" },
      { "id": "WOW", "nombre": "War of Warcraft", "company": "Blizzard Entertainment", "valoracion": "3.7", "image": "/assets/Pictures/WOW.jpg" },
      { "id": "LOU", "nombre": "The Last of Us", "company": "Naughty Dog", "valoracion": "4.5", "image": "/assets/Pictures/LOU.jpg" }
      
    ];

    for(let i=0; i<listaJuegos.length; i++){
       if ((listaJuegos[i].id) === this._idJuego){
        this.juego.setId(listaJuegos[i].id);
        this.juego.setNombre(listaJuegos[i].nombre);
        this.juego.setCompany(listaJuegos[i].company);
        this.juego.setValoracion(listaJuegos[i].valoracion);
        this.juego.setImage(listaJuegos[i].image);
       };
      }
    }




  
} 
  


