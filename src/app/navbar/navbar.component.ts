import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @Output() searchUserEvent = new EventEmitter<any>();

  constructor(private dbServices: DbService) { }
  userLoginStatus: any = 'no';

  ngOnInit(): void {
    this.userLoginStatus =  this.dbServices.isUserLoggedIn();
  }

  searchUserByKeyword(elm: Event) {
    this.searchUserEvent.emit((elm.target as HTMLInputElement).value);
  }
}
