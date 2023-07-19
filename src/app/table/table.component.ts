import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  @Input() userList: any;
  @Output() userEditEmittor = new EventEmitter<any>();
  @Output() userDeleteEmittor = new EventEmitter<any>();

  // table information
  table_title: String = "User Lists";
  table_th: Object[] = ["Id", "Book Title", "Book Author", "Publish Date", "Action"];

  constructor() { }
  ngOnInit(): void { }

  // delete user
  deleteThisUser(userId: String) {
    this.userDeleteEmittor.emit(userId);
  }
  
}
