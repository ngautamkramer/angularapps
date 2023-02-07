import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})

export class EdituserComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dbService: DbService
  ) { }

  form: any;
  currUserId: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.currUserId = param.get('id');
      let currUserData = this.dbService.getDataById(this.currUserId);
      this.form = new FormGroup({
        name: new FormControl(currUserData.name, { nonNullable: true }),
        email: new FormControl(currUserData.email, { nonNullable: true }),
        dob: new FormControl(currUserData.dob, { nonNullable: true }),
        height: new FormControl(currUserData.height, { nonNullable: true })
      });
    });
  }

  editThisUser() {
    let currUser = this.form.value;
    currUser.id = this.currUserId;
    this.dbService.updateData(this.currUserId, currUser);
    alert("User updated successfully!");
    this.router.navigate(['/']);
  }

}
