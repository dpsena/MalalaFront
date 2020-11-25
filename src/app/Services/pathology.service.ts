import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pathology} from '../Models/Pathology';

@Injectable({
  providedIn: 'root'
})
export class PathologyService {
  apiURL:String='https://ataraxia-salud.herokuapp.com';
  constructor(

    private http:HttpClient

  ) { }
  createPathology(formData){
    return this.http.post<Pathology>(`${this.apiURL}/pathology/create`,formData)
    }
    getAll(){
      return this.http.get(`${this.apiURL}/pathology/getAll`)
    }
    updatePathology(formData, idPathology){
      return this.http.put<Pathology>(`${this.apiURL}/pathology/update/${idPathology}`, formData);
    }
}
