import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent implements OnInit {

  // 
  @Output() userAddEmittor = new EventEmitter<any>();

  form = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    dob: new FormControl('', { nonNullable: true }),
    height: new FormControl(5, { nonNullable: true })
  });

  constructor(private dbServices: DbService, private router: Router) { }

  ngOnInit(): void { }

  addThisUser() {
    this.dbServices.addData(this.form.value);
    alert("User saved successfully!");
    this.router.navigate(['/']);
  }

}
