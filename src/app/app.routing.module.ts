import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './books/addbook/addbook.component';
import { ErrorsComponent } from './errors/errors.component';
import { BooklistComponent } from './books/booklist/booklist.component';
import { EditbookComponent } from './books/editbook/editbook.component';
import { DashboardComponent } from './books/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './books/login/login.component';
import { RegisterComponent } from './books/register/register.component';
import { LogoutComponent } from './books/logout/logout.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'books', component: BooklistComponent },
  { path: 'addbook', component: AddbookComponent },
  { path: 'editbook/:id', component: EditbookComponent},
  { path: '**', component: ErrorsComponent}
];

@NgModule({
  declarations: [
    AddbookComponent,
    BooklistComponent,
    EditbookComponent,
    DashboardComponent,
    TableComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule, CommonModule, BrowserModule],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
