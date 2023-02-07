import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() { };

  @Input() sendUserInputToUserListCmp = new EventEmitter<any>();

  title: String = "userList";
  public searchText: String = "";

  searchUserByKeyword(text: String) {
    this.searchText = text
  }

}
