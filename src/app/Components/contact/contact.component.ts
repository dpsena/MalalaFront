import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
      alert('La información será enviada')
    }else{
      alert('El formulario es incorrecto')
    }
  }

}
