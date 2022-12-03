import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  
  { path:'', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'inicio/detalle/:id', component: DetalleComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
