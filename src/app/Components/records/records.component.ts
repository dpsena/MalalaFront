import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';  
import { RecordsService} from '../../Services/records.service';
const swal = require('sweetalert')

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  recordsForm:FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private recordsService:RecordsService,
  ) {this.validator() }

  ngOnInit(): void {
  }
  validator(){
    this.recordsForm = this.formBuilder.group({
      dateAndHour: [ '', Validators.required ],
      pathology: [ 'Pathology', Validators.required ],
      observations: [ 'Observation', Validators.required ],
      recommendations: [ 'Recommendation',Validators.required ],
      printer: [''],
      user: [ '', Validators.required ],
    })
  }

  saveRecord(){

    
      if(this.recordsForm.valid){
        swal('Proceso correcto',  'Se va a guardar la información', 'success')
        //alert('Se va a guardar la información')
      }else{
        swal('Proceso incorrecto',  'El formulario no es valido', 'error')
        //alert('El formulario no es valido')
      }
    }

  

}
