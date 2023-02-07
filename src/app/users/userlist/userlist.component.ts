import { Component, OnInit, Input } from '@angular/core';
// import { Router } from '@angular/router';
// import { userData } from 'src/app/interfaces/user';
import { DbService  } from 'src/app/services/db.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserlistComponent implements OnInit {

  userList: any;
  searchText: String = "";

  constructor(private dbService: DbService) { }
  
  ngOnInit(): void {
    // get all user data here when this component initialized
    this.userList  = this.dbService.getData();
  }

  userDeleteEmittor(userId: String) {
    let index = this.userList.findIndex((user: any) => user.id === userId);
    this.userList.splice(index, 1);
    // delete for db also or we can reset all value in userList
    this.dbService.deleteData(userId);
  }


  searchUserByKeyword(text: any) {
    this.searchText = text
  }

}