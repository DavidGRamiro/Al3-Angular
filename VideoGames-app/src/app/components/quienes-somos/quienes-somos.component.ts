import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})

export class QuienesSomosComponent implements OnInit{
  
  form: FormGroup;

  constructor( private fb: FormBuilder, private router: Router){
    this.form = this.fb.group({
      nombre:['', Validators.required ], 
      correoelectronico:['', Validators.required ],
      telefono:['', Validators.required ],
    })
  }

  
  aceptar(){

    console.log(this.form)

    var nombre ;
    var correoelectronico;
    var telefono;
    
    if (nombre == ' ' && correoelectronico == ' ' && telefono== ' '){
      alert("rellene el formulario");
      this.form.reset();
      
    }else{
      alert("Contactaremos con usted lo antes posible");
      
    }

    
  }
  ngOnInit(): void{
  }
}
