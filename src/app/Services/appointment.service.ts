import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Appointment} from '../Models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  apiURL:String='https://ataraxia-salud.herokuapp.com';

  constructor(
    private http:HttpClient
  ) {}

  createAppointment(formData){
    return this.http.post<Appointment>(`${this.apiURL}/appointment/create`,formData)
    }
}