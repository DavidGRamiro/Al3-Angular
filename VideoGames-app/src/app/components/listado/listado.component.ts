import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  private _listaJuegos: { id: string; nombre: string; valoracion: string; route: string; }[] | undefined;
  
  constructor(){
    this._listaJuegos = [
      { "id": "MNC", "nombre": "Minecraft", "valoracion": "4.5" , "route": "detalle/MNC" },
      { "id": "GTA", "nombre": "Grand Theft Auto", "valoracion": "3.7", "route": "detalle/GTA"},
      { "id": "LOL", "nombre": "League of Legends", "valoracion": "3.6", "route": "detalle/LOL"},
      { "id": "COD", "nombre": "Call of Duty", "valoracion": "2.4", "route": "detalle/COD"},
      { "id": "WOW", "nombre": "War of Warcraft", "valoracion": "3.7", "route": "detalle/WOW"},
      { "id": "LOU", "nombre": "The Last of Us", "valoracion": "4.5", "route": "detalle/LOU"}
    ];
  }

  //Get & sets
  public get listaJuegos(): { id: string; nombre: string; valoracion: string; route: string; }[] | undefined {
    return this._listaJuegos;
  }
  public set listaJuegos(value: { id: string; nombre: string; valoracion: string; route: string; }[] | undefined) {
    this._listaJuegos = value;
  }
  ngOnInit(): void{
  }
}
