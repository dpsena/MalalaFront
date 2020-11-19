import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-list-professional',
  templateUrl: './list-professional.component.html',
  styleUrls: ['./list-professional.component.css']
})
export class ListProfessionalComponent implements OnInit {
  allProfessionals: any;
  constructor(
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getAllProfessional()
  }

  getAllProfessional(){
    this.userService.getAllProfessional().subscribe( 
      (professionals) =>{
        console.log(this.allProfessionals);
        this.allProfessionals = professionals
      },
      (error) =>{
        console.error('Error ->', error)
      }
    )
  }

  updateProfessional(professional){
    localStorage.setItem(`professional-${professional._id}`, JSON.stringify(professional))
    this.route.navigate([`/update-professional/${professional._id}`])
  }
}
