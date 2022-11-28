import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  //Variable asiganada al objeto que maneja nuestro formulario.
  form: FormGroup;
  
  //Importamos 2 modulos en nuestro constructor.
  // -> FormBuilder - Clase de AngularForms que nos ayuda a crear nuestro formulario
  // -> Router - Módulo para redirigir a la página de inicio una vez logueados.

  constructor( private fb: FormBuilder, private router: Router){
    this.form = this.fb.group({
      usuario:['', Validators.required ], //Por defecto esta vacio '', y le decimos que son campos obligatorios.
      password:['', Validators.required ],
    })
  }

  //Método que se ejecuta cuando hacemos click en el SUBMIT del formulario.
  ingresar(){

    console.log(this.form)
    //Recogemos los datos del formulario y lo almacenamos en constantes
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    
    if (usuario == 'felix' && password == 'edix'){
      //Redireccionamos a la página principal.
      this.router.navigate(['inicio']); //Path de la ruta de inicio.component
    }else{
      //Borramos el formulario y mostramos el mensaje de error.
      this.form.reset();
      alert("Usuario o contraseña incorrectos");
    }
  }
  ngOnInit(): void{
  }
}
