import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routing.module";
import { HttpClientModule } from '@angular/common/http';

// my components
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AppComponent, 
        NavbarComponent
    ],
    imports: [AppRoutingModule, HttpClientModule, CommonModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}