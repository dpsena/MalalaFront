import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';  
import {PathologyService } from '../../Services/pathology.service';
@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})
export class ObservationComponent implements OnInit {
  observationForm:FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private pathologyService:PathologyService,
  ) { }
  ngOnInit(): void {
  }
  validator(){
    this.observationForm = this.formBuilder.group({
      numberDay:[ '', Validators.required ],
      observation:[ '', Validators.required ],
      date:[ '', Validators.required ],
      user:[ '', Validators.required ]
    })
  } 

saveObservation(){

if(this.observationForm.valid){

  alert('se ha guardado correctamente la información')
}else{
  alert('valide la informacion envio de observacion no válido')
}

}

}
