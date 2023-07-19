import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})

export class EditbookComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dbService: DbService
  ) { }

  form: any;
  currBookId: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.currBookId = param.get('id');
      let currBookData = this.dbService.getDataById(this.currBookId);
      this.form = new FormGroup({
        booktitle: new FormControl(currBookData.booktitle, { nonNullable: true }),
        bookauthor: new FormControl(currBookData.bookauthor, { nonNullable: true }),
        publishdate: new FormControl(currBookData.publishdate, { nonNullable: true }),
      });
    });
  }

  editThisUser() {
    let currUser = this.form.value;
    currUser.id = this.currBookId;
    this.dbService.updateData(this.currBookId, currUser);
    alert("User updated successfully!");
    this.router.navigate(['/books']);
  }

}
