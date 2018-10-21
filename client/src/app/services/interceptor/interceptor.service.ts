import { Injectable, Injector} from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const userService = this.injector.get(UserService);
    const tokenreq = req.clone({
      setHeaders: {
        Authorization : `Bearer ${userService.getToken()}`
      }
    });
    return next.handle(tokenreq);
  }
}
