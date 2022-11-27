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
          path:'/',
          name: 'Acción'
        },
        {
          path:'/',
          name: 'Aventura'
        },
        {
          path:'/',
          name: 'Carreras'
        },
        {
          path:'/',
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
