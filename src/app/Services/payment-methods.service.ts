import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PaymentMethods} from '../Models/paymentMethods';
@Injectable({
  providedIn: 'root'
})
export class PaymentMethodsService {
  apiURL:String='https://ataraxia-salud.herokuapp.com';
  constructor(
    private http:HttpClient
  ) { }

createPaymentMethods(formData){
  return this.http.post<PaymentMethods>(`${this.apiURL}/paymentMethods/create`,formData)
  }
  getAll(){
    return this.http.get(`${this.apiURL}/paymentMethods/getAll`)
  }
  getAllPaymentMethods(){
    return this.http.get(`${this.apiURL}/paymentMethods/getAll?searchBy=PaymentMethods`)
  }
 
}

