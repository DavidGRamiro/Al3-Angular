import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  public nombreUsuario: string | null;
  route: any;

  constructor(route: ActivatedRoute){
    this.nombreUsuario = route.snapshot.paramMap.get('nombreUsuario');
 }
}
