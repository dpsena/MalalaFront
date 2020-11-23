import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';  
import {PathologyService } from '../../Services/pathology.service';
@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.component.html',
  styleUrls: ['./pathology.component.css']
})
export class PathologyComponent implements OnInit {
  pathologyForm:FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private pathologyService:PathologyService,
  ) { }

  ngOnInit(): void {
  }
  validator(){
    this.pathologyForm = this.formBuilder.group({
    name:[ '', Validators.required ],
    characteristics:[ '', Validators.required ]

    })
  }

}
