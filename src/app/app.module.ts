import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routing.module";

// my components
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TableComponent } from "./table/table.component";
import { AdduserComponent } from "./users/adduser/adduser.component";
import { UserlistComponent } from "./users/userlist/userlist.component";
import { ErrorsComponent } from "./errors/errors.component";
import { EdituserComponent } from "./users/edituser/edituser.component";

@NgModule({
    declarations: [
        AppComponent, 
        NavbarComponent, 
        TableComponent, 
        AdduserComponent,
        UserlistComponent,
        ErrorsComponent,
        EdituserComponent
    ],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}