import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})

export class AddbookComponent implements OnInit {

  // 
  @Output() userAddEmittor = new EventEmitter<any>();

  form = new FormGroup({
    booktitle: new FormControl('', { nonNullable: true }),
    bookauthor: new FormControl('', { nonNullable: true }),
    publishdate: new FormControl('', { nonNullable: true }),
  });

  constructor(private dbService: DbService, private router: Router) { }

  ngOnInit(): void {
  }

  addThisUser() {
    this.dbService.addData(this.form.value);
    alert("Book saved successfully!");
    this.router.navigate(['/books']);
  }

}
