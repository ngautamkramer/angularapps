import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
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
  userList2: any;
  searchText: String = "";
  
  constructor(private dbService: DbService) { }
  
  ngOnInit(): void {
    // get all user data here when this component initialized
    this.userList = this.dbService.getData();
    this.userList2 = this.userList;
  }

  userDeleteEmittor(userId: String) {
    let index = this.userList.findIndex((user: any) => user.id === userId);
    this.userList.splice(index, 1); 
    this.userList2 = this.userList;
    // delete for db also or we can reset all value in userList
    this.dbService.deleteData(userId);
  }

  searchUserByKeyword() {
    if (this.searchText == "") {
      this.userList = this.dbService.getData();
    } else {
      let userObj: any = this.userList2;
      let finalObj: any = [];
      for (let index = 0; index < userObj.length; index++) {
        let subObject: any =  userObj[index];
        Object.keys(subObject).map((key) => {
          let singleObj = String(subObject[key]);
          if (singleObj.trim().toLowerCase().includes(this.searchText.trim().toLowerCase())) {
            finalObj[index] = subObject; return;
          }
        });
      }
      this.userList = finalObj.filter((el: any) => {return el != null;});
    }
  }

  getCurrInfo(): void {

  }
  
}