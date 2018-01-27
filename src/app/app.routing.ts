import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login.component";
import {HomeComponent} from "./components/home.component";
import {AuthGuard} from "./services/auth.guard";
import {RegisterUserComponent} from "./components/register.user.component";
import {ListUserComponent} from "./components/list.user.component";
import {InfoUserComponent} from "./components/info.user.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent/*, canActivate: [AuthGuard]*/},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterUserComponent/*, canActivate: [AuthGuard] */},
  { path: 'users', component: ListUserComponent/*, canActivate: [AuthGuard] */},
  { path: 'update/:id', component: InfoUserComponent/*, canActivate: [AuthGuard] */},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
