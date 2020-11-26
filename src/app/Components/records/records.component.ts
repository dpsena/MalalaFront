import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';  
import { RecordsService} from '../../Services/records.service';

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
        alert('Se va a guardar la información')
      }else{
        alert('El formulario no es valido')
      }
    }

  

}
