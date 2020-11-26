import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';  
import { UserService } from '../../Services/user.service';
const swal = require('sweetalert')

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  signForm: FormGroup

  constructor(

    private formBuilder: FormBuilder,
    private userService:UserService,

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
      password: [ '',[Validators.required, Validators.minLength(10)] ],
      role: [ 'User', Validators.required ],
      identificationNumber: [ '', Validators.required ],
    })
  }
    saveUser(){
      if(this.signForm.valid){
        console.log('Mensaje ',this.signForm.value)
        this.userService.createUser(this.signForm.value).subscribe(
        (userCreated) => {
          console.log(userCreated)
          swal('Proceso correcto',  'el usuario se creo correctamente', 'success')
          //alert('el usuario se creo correctamente')
        },
          (error) =>{
            console.error('tuvimos un error ->', error)
  
          }
        )
      }else{
        swal('Proceso incorrecto',  'El formulario es incorrecto', 'error')
       // alert('El formulario es incorrecto')
      }
    }
}
