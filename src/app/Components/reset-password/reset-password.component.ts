import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.validator()
  }

  ngOnInit(): void {
  }

  validator(){
    this.resetPasswordForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)] ]
    })
  }

  saveUser(){
    if(this.resetPasswordForm.valid){
      alert('Se va a guardar la información')
    }else{
      alert('El formulario no es valido')
    }
  }
}
