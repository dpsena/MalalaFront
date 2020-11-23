import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  apiURL:String='https://ataraxia-salud.herokuapp.com';

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    return this.http.get(`${this.apiURL}/billing/getAll`)
  }
}
