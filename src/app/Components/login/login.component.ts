import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.validator()
   }

  ngOnInit(): void {
  }

  validator(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(6)] ]
    })
  }
  
  saveUser(){
    if(this.loginForm.valid){
      alert('Se va a guardar la información')
    }else{
      alert('El formulario no es valido')
    }
  }

}
