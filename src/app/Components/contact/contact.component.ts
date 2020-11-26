import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
const swal = require('sweetalert')

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.validator()
  }

  ngOnInit(): void {
  }

  validator(){
    this.contactForm = this.formBuilder.group({
      idDoc: [ '', Validators.required ],
      name: [ '', Validators.required ],
      email: [ '', Validators.required, Validators.email ],
      lastName: [ '', Validators.required ],
      issue: [ '', Validators.required ],
      message: [ '', Validators.required ],
      termsAndConditions: [ '', Validators.required ],
      dataTreatment: [ '', Validators.required ],
    })
  }
  saveContact(){
    if(this.contactForm.valid){
      swal('Proceso correcto', 'La información será enviada', 'sucess')
      //alert('La información será enviada')
    }else{
      swal('Proceso incorrecto', 'El formulario es incorrecto', 'error')
      //alert('El formulario es incorrecto')
    }
  }

}
