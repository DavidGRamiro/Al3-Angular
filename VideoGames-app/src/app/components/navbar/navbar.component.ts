import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  navItems = [
    {
      path: '/Home',
      name: 'Home'
    },
    {
      path: '/QuienesSomos',
      name: 'Quienes somos'
    },
    {
      path: '/Categorias',
      name: 'Categorias',
      subItems:[
        {
          path:'/Accion',
          name: 'Acción'
        },
        {
          path:'/Aventura',
          name: 'Aventura'
        },
        {
          path:'/Carreras',
          name: 'Carreras'
        },
        {
          path:'/Shooters',
          name: 'Shooters'
        }
      ]
    },
  ]

  constructor(){
  }

  ngOnInit(): void {
    
  }
}
