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
          path:'/MNC',
          name: 'Minecraft'
        },
        {
          path:'/GTA',
          name: 'Grand Theft Auto'
        },
        {
          path:'/LOL',
          name: 'League of Legends'
        },
        {
          path:'/COD',
          name: 'Call Of Duty'
        },
        {
          path:'/WOW',
          name: 'World of Warcraft'
        },
        {
          path:'/LOU',
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
