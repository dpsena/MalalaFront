import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../Services/user.service';
import {StorageService} from '../../Services/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private storageService: StorageService
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
  
  login(){
    if(this.loginForm.valid){
        this.userService.login(this.loginForm.value).subscribe(
          (dataUser) =>{
            this.storageService.saveToken(dataUser['token'])
            const infoUser = this.storageService.dataUser()
            if(infoUser.role == 'Professional'){
              this.router.navigate(['/home-professional'])
            }else{
              this.router.navigate(['/'])
              //console.log(dataUser['token']) 
            }
            
          },
          (error) =>{
            console.error('Error -> ', error.error.message)
          }
        )
    }else{
      alert('Debes llenar todos los campos.')
    }
  }

}
