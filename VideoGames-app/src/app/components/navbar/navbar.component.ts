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
      path: '/Juegos',
      name: 'Juegos',
      subItems:[
        {
          path:'detalle/MNC',
          name: 'Minecraft'
        },
        {
          path:'detalle/GTA',
          name: 'Grand Theft Auto'
        },
        {
          path:'detalle/LOL',
          name: 'League of Legends'
        },
        {
          path:'detalle/COD',
          name: 'Call Of Duty'
        },
        {
          path:'detalle/WOW',
          name: 'World of Warcraft'
        },
        {
          path:'detalle/LOU',
          name: 'The Last of Us'
        }
      ]
    },
  ]

  constructor(){
  }

  ngOnInit(): void {
    
  }
}
