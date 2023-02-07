import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './users/adduser/adduser.component';
import { AppComponent } from './app.component';
import { ErrorsComponent } from './errors/errors.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { EdituserComponent } from './users/edituser/edituser.component';

const routes: Routes = [
  { path: '', component: UserlistComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'edituser/:id', component: EdituserComponent},
  { path: '**', component: ErrorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
