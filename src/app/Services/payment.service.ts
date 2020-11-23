import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Payment} from '../Models/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiURL:String='https://ataraxia-salud.herokuapp.com';

  constructor(
    private http:HttpClient,
  ) { }

  createPayment(formData){
    return this.http.post<Payment>(`${this.apiURL}/payment/create`, formData)
  }

  
}
