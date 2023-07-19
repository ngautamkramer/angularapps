import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DbService {

  constructor(private http: HttpClient ) { } 
  dbBookKey: any = "bookList"; dbKeyUser: any = "userList"; currUsers: any = null;
  private apiURL = "https://geolocation-db.com/jsonp";
  
  getData() {
    this.currUsers = localStorage.getItem(this.dbBookKey);
    return this.currUsers == null ? [] : JSON.parse(this.currUsers);
  }

  getUserData() {
    this.currUsers = localStorage.getItem(this.dbKeyUser);
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
    return localStorage.setItem(this.dbBookKey, JSON.stringify(this.currUsers));
  }


  addDataUser(user: any) {
    this.currUsers = this.getUserData();
    user.id = this.getRandomId();
    this.currUsers.push(user);
    return localStorage.setItem(this.dbKeyUser, JSON.stringify(this.currUsers));
  }


  updateData(userId: String, user: any) {
    this.currUsers = this.getData();
    for(let i = 0; i < this.currUsers.length; i++) {
      if(this.currUsers[i].id == userId) {
        this.currUsers[i] = user;
      }
    }
    return localStorage.setItem(this.dbBookKey, JSON.stringify(this.currUsers));
  }

  deleteData(userId: String) {
    this.currUsers = this.getData();
    for(let i = 0; i < this.currUsers.length; i++) {
        if (this.currUsers[i].id == userId) {
          this.currUsers.splice(i, 1);
        }
    }
    return localStorage.setItem(this.dbBookKey, JSON.stringify(this.currUsers));
  }

  getRandomId() {
    let S4 = function() { return (((1+Math.random())*0x10000)|0).toString(16).substring(1); };
    return (S4()+S4());
  }

  apiReuest(): Observable<any> { 
    let HeadersOption: object = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    return this.http.get(this.apiURL); 
  }

  async getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("location data: ", position);
      });
    }
  }

  isUserLoggedIn() {
    if(localStorage.getItem(this.dbKeyUser + "_loginStatus") == "yes") {
      return true;
    }else{
      return false;
    }
  }

  setUserLoggedIn() {
    return localStorage.setItem(this.dbKeyUser + "_loginStatus", "yes");
  }

  unsetUserLoggedIn() {
    localStorage.removeItem(this.dbKeyUser + "_loginStatus");
    localStorage.removeItem(this.dbKeyUser + "_currentLoggedinUser");
  }

  setCurrentLoggedInUser(userid: string) {
    this.setUserLoggedIn();
    return localStorage.setItem(this.dbKeyUser + "_currentLoggedinUser", userid);
  }

  authRedirect(status: number) {
    if(status == 1) {
      if(!this.isUserLoggedIn()) {
        window.location.href = "/";
      }
    }else{
      if(this.isUserLoggedIn()) {
        window.location.href = "/dashboard";
      }
    }
  }

}
