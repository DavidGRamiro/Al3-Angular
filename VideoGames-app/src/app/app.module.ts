import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
<<<<<<< Updated upstream
=======
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ListadoComponent } from './listado/listado.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';



>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
<<<<<<< Updated upstream
=======
    LoginComponent,
    InicioComponent,
    DetalleComponent,
    ListadoComponent,
    UsuarioComponent,
    QuienesSomosComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
