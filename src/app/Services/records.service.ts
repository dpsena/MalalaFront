import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { RecordsComponent } from '../Components/records/records.component';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  
  apiURL:String='https://ataraxia-salud.herokuapp.com';
  constructor(
    private http:HttpClient,
    
  ) { }

  createRecord(formData){
    return this.http.post<RecordsComponent>(`${this.apiURL}/record/create`,formData)
  }

}
