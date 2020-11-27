import { Component, OnInit } from '@angular/core';
import{RecordsService} from '../../Services/records.service';
import{PathologyService} from '../../Services/pathology.service';
import{UserService} from '../../Services/user.service';
import{StorageService} from '../../Services/storage.service';
import{FormBuilder,Validators,FormGroup} from '@angular/forms';

const swal = require('sweetalert')

@Component({
  selector: 'app-create-records',
  templateUrl: './create-records.component.html',
  styleUrls: ['./create-records.component.css']
})
export class CreateRecordsComponent implements OnInit {

  createRecords:FormGroup
  allPathology: any
  allPatient: any
  userPathology:Array<any>=[]

  constructor(
  private formBuilder:FormBuilder,
  private recordsService:RecordsService,
  private pathologyService:PathologyService,
  private userService:UserService,
  private storageService:StorageService,

  ) { 
    this.validator(),
    this.getPathology()
  }

  ngOnInit(): void {}

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

 
  getPathology(){
    this.pathologyService.getAll().subscribe(
      (pathology) => {
        this.allPathology = pathology
      }, 
      (error) => {
        console.error('Error -> ', error)
      }
    )
  }
  savePathology(event){
    console.log(event.target.value)
    if( this.userPathology.includes(event.target.value) ){
      const index = this.allPatient.indexOf(event.target.value)
      this.userPathology.splice(index, 1)
    }else{
      this.userPathology.push(event.target.value)
    }

    let valueInput: any = ''

    if(this.userPathology.length > 0){
      valueInput = this.userPathology
    }
    this.createRecords.get('Pathology').setValue(valueInput)
  }
  
  saveRecords(){
    if (this.createRecords.valid) {
      this.recordsService.createRecord(this.createRecords.value).subscribe(
        (recordCreated) => {
          console.log(recordCreated)
          swal('Proceso correcto',  'La historia a sido creada correctamente', 'sucess')
        },
        (error) => {
          console.error('Error=>',error)
          swal('Proceso incorrecto', 'Hubo inconvenientes al guardar la historia,verifique la información.', 'error')
        }
      )
    } 
  }
}
