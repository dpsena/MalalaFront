import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  allUsers: any;

  constructor(
    private userServices: UserService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.userServices.getAll().subscribe(
      (users) => {
        this.allUsers = users
      },
      (error) =>{
        console.error('Error -> ', error)
      }
    )
  }

}
