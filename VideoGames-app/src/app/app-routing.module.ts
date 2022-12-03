import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream

const routes: Routes = [];
=======
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ListadoComponent } from './listado/listado.component';


const routes: Routes = [
  
  { path:'', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'inicio/detalle/:id', component: DetalleComponent },
  {path:'QuienesSomos', component: QuienesSomosComponent},
  {path:'QuienesSomos/detalle/:id', component: DetalleComponent},
  {path:'Home', component: InicioComponent},
  {path:'Home/detalle/:id', component: DetalleComponent},
  {path:'Juegos',component:ListadoComponent},
  {path:'Juegos/detalle/:id',component:DetalleComponent}  
];
>>>>>>> Stashed changes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
