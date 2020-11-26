import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppointmentService } from '../../Services/appointment.service';
import { UserService } from '../../Services/user.service'
const swal = require('sweetalert')

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointmentForm: FormGroup
  allUser: any

  constructor(
    private formBuilder: FormBuilder,
    private appointmentService: AppointmentService,
    private userService: UserService
  ) {

    this.getUser()
   
   }

  ngOnInit(): void {
    this.validator()
  }

  validator() {
    this.appointmentForm = this.formBuilder.group({
      date: ['', Validators.required],
      description: ['', Validators.required],
      user: ['', Validators.required],

    })
  }
  saveAppointment() {
    if (this.appointmentForm.valid) {
      console.log('Mensaje ', this.appointmentForm.value)
      this.appointmentService.createAppointment(this.appointmentForm.value).subscribe(
        (appointmentCreated) => {
          console.log(appointmentCreated)
          swal('Proceso correcto',  'La cita se creo correctamente', 'success')
          //alert('La cita se creo correctamente')
        },
        (error) => {
          console.error('Tuvimos un error ->', error)

        }
      )
    } else {
      swal('Proceso incorrecto', 'El formulario es incorrecto', 'error')
      //alert('El formulario es incorrecto')
    }
  }

  getUser() {
    this.userService.getAll().subscribe(
      (user) => {
        this.allUser = user
        console.log(this.allUser)
      },
      (error) => {
        console.error('Error-> ', error)

      }
    )
  }
  
  saveUser(event) {
    console.log(event.target.value)
     this.appointmentForm.get('user').setValue(event.target.value)
  }
}