import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dbService: DbService) { }

  userList: any;  
  ngOnInit(): void {
    // get all user data here when this component initialized
    this.userList = this.dbService.getData();
  }


}
