import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  signForm: FormGroup

  constructor(

    private formBuilder: FormBuilder

  ) {
    this.validator()
   }

  ngOnInit(): void {
  }

  validator(){
    this.signForm = this.formBuilder.group({
      name: [ '', Validators.required ],
      lastName: [ '', Validators.required ],
      email: [ '', [Validators.required, Validators.email] ],
      password: [ '', Validators.required ],
      role: [ 'User', Validators.required ],
      identificationNumber: [ '', Validators.required ],
    })
  }
    saveUser(){
      if(this.signForm.valid){
        alert('Usuario en registro')
      }else{
        alert('El formulario es incorrecto')
      }
    }
}
