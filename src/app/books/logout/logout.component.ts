import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private dbServie: DbService) { }

  ngOnInit(): void {
    this.dbServie.unsetUserLoggedIn();
    window.location.href = "";
  }

}
