import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  constructor(private dbService: DbService, private router: Router) { }

  ngOnInit(): void {
    this.dbService.authRedirect(0);
  }

  addThisUser() {
    if(this.form.value.name == "" || this.form.value.email == "" || this.form.value.password == ""){
      alert("All fields are required!");
    }else{
      this.dbService.addDataUser(this.form.value);
      alert("User saved successfully!");
      this.router.navigate(['']);
    }
  }


}
