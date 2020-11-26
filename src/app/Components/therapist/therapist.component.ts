import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';  
import { UserService } from '../../Services/user.service';
@Component({
  selector: 'app-therapist',
  templateUrl: './therapist.component.html',
  styleUrls: ['./therapist.component.css']
})
export class TherapistComponent implements OnInit {

  signFormProfessional: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.validator()
  }

  validator(){
    this.signFormProfessional = this.formBuilder.group({
      name: [ '', Validators.required ],
      lastName: [ '', Validators.required ],
      email: [ '', [Validators.required, Validators.email] ],
      password: [ '',[Validators.required, Validators.minLength(10)] ],
      role: [ 'Professional', Validators.required ],
      identificationNumber: [ '', Validators.required ],
    })
  }

  saveTherapist(){
    if(this.signFormProfessional.valid){
      console.log('Mensaje ',this.signFormProfessional.value)
      this.userService.createUser(this.signFormProfessional.value).subscribe(
      (professionalCreated) => {
        console.log(professionalCreated)
        alert('el usuario se creo correctamente')},
        (error) =>{
          console.error('tuvimos un error ->', error)

        }
      )
    }else{
      
      alert('El formulario es incorrecto')
    }
  }

}
