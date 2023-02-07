import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  dbKey: any = "userList"; currUsers: any = null;

  constructor() { }

  getData() {
    this.currUsers = localStorage.getItem(this.dbKey);
    return this.currUsers == null ? [] : JSON.parse(this.currUsers);
  }

  getDataById(userId: String) {
    this.currUsers = this.getData();
    for(let i = 0; i < this.currUsers.length; i++) {
      if(this.currUsers[i].id == userId) {
        return this.currUsers[i];
      }
    }
  }

  addData(user: any) {
    this.currUsers = this.getData();
    user.id = this.getRandomId();
    this.currUsers.push(user);
    return localStorage.setItem(this.dbKey, JSON.stringify(this.currUsers));
  }

  updateData(userId: String, user: any) {
    this.currUsers = this.getData();
    for(let i = 0; i < this.currUsers.length; i++) {
      if(this.currUsers[i].id == userId) {
        this.currUsers[i] = user;
      }
    }
    return localStorage.setItem(this.dbKey, JSON.stringify(this.currUsers));
  }

  deleteData(userId: String) {
    this.currUsers = this.getData();
    for(let i = 0; i < this.currUsers.length; i++) {
        if (this.currUsers[i].id == userId) {
          this.currUsers.splice(i, 1);
        }
    }
    return localStorage.setItem(this.dbKey, JSON.stringify(this.currUsers));
  }

  getRandomId() {
    let S4 = function() { return (((1+Math.random())*0x10000)|0).toString(16).substring(1); };
    return (S4()+S4());
  }

}
