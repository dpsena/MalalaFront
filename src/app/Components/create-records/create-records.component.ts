import { Component, OnInit } from '@angular/core';
import{RecordsService} from '../../Services/records.service';
import{FormBuilder,Validators,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-create-records',
  templateUrl: './create-records.component.html',
  styleUrls: ['./create-records.component.css']
})
export class CreateRecordsComponent implements OnInit {

  createRecords:FormGroup
  constructor(
  private formBuilder:FormBuilder,
  private recordsService:RecordsService

  ) { }

  ngOnInit(): void { this. validator()
  }

  validator() {
    this.createRecords = this.formBuilder.group({

      dateAndHour: ['', Validators.required],
      pathology: ['', Validators.required],
      observations: ['', Validators.required],
      recommendations: ['', Validators.required],
      printer: [''],
      user: ['', Validators.required]

    })

  }
 
  saveRecords() {
    if (this.createRecords.valid) {
      this.recordsService.createRecord(this.createRecords.value).subscribe(

        (recordCreated) => {
          console.log(recordCreated)
          alert('La historia a sido creada correctamente')
        },
        (error) => {
          console.error('Error=>', error)
        }
      )
    } else {
      alert('Hubo inconvenientes al guardar la historia,verifique la información.')
    }
  }
  
}
