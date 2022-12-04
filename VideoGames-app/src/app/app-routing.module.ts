import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleComponent } from './detalle/detalle.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  
  { path:'', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'inicio/detalle/:id', component: DetalleComponent }, 
  { path: 'sobre-nosotros/detalle/:id', component: DetalleComponent }, 
  { path: 'contacto/detalle/:id', component: DetalleComponent },   
  { path: 'contacto', component: ContactoComponent } , 
  { path: 'sobre-nosotros', component: SobreNosotrosComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
