import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService} from './services/user/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private userservice: UserService, private router: Router)
 {

 }

 canActivate(): boolean
 {
     if (this.userservice.loggedIn()) {
       return true;
     } else {
        this.router.navigate(['login']);
        return false;
     }
 }
}
