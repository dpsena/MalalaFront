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
    this.getAllUser()
  }

  getAllUser(){
    this.userServices.getAllUser().subscribe(
      (users) => {
        this.allUsers = users
      },
      (error) =>{
        console.error('Error -> ', error)
      }
    )
  }

}
