import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  constructor(private dbServices: DbService, private router: Router) { }

  ngOnInit(): void {
    this.dbServices.authRedirect(0);
  }

  authUser() {
    let formData: any = this.form.value;
    if(formData.email == "" || formData.password == ""){
      alert("All fields are required!");
    }else{
      let allUsers = this.dbServices.getUserData();
      allUsers.forEach((arrobj: any) => {
        if(arrobj.email == formData.email && arrobj.password == formData.password) {
          this.dbServices.setCurrentLoggedInUser(arrobj.id);
          window.location.href = "/dashboard";
        }else{
          alert("Oops! Invalid credentails.");
          window.location.reload();
        }
      }); 
    }
  }

}
