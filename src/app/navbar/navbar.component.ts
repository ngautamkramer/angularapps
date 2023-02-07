import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @Output() searchUserEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  searchUserByKeyword(elm: Event) {
    this.searchUserEvent.emit((elm.target as HTMLInputElement).value);
  }
}
