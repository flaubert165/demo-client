import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import {LoginComponent} from "./components/login.component";
import {HomeComponent} from "./components/home.component";
import {AlertComponent} from "./components/alert.component";
import {RegisterUserComponent} from "./components/register.user.component";
import {AlertService} from "./services/alert.service";
import {AuthenticationService} from "./services/authentication.service";
import {AuthGuard} from "./services/auth.guard";
import {UserService} from "./services/user.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {routing} from "./app.routing";
import {ListUserComponent} from "./components/list.user.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    RegisterUserComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [
    AuthenticationService,
    AlertService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
