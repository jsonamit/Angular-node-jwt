import {Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {AuthGuard} from '../auth.guard';

const app_route: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];
export const routing = app_route;

