import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';  
import {PathologyService } from '../../Services/pathology.service';
import{Router} from '@angular/router';
const swal = require('sweetalert')

@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.component.html',
  styleUrls: ['./pathology.component.css']
})
export class PathologyComponent implements OnInit {
  pathologyForm:FormGroup
  allPathology:any
  userPathology:Array<any>=[]

  constructor(
    private formBuilder: FormBuilder,
    private pathologyService:PathologyService,
    private router: Router,
  ) {
    this.validator()
  }

  ngOnInit(): void {
  }

  validator(){
    this.pathologyForm = this.formBuilder.group({
    name:[ '', Validators.required ],
    characteristics:[ '', Validators.required ]

    })
  }
  getAll(){
    this.pathologyService.getAll().subscribe(
      (pathology) => {
        this.allPathology = pathology
      },
      (error) =>{
        console.error('Error -> ', error)
      }
    )
  }
  savePathology(){

    if(this.pathologyForm.valid){
      swal('Proceso correcto',  'se ha guardado correctamente la información', 'success')
      //alert('se ha guardado correctamente la información')
    }else{
      swal('Proceso incorrecto',  'valide la informacion envio de observacion no válido', 'error')
      //alert('valide la informacion creación  de nuevas patologias invalido no válido')
    }
    
    }
  
   
}
