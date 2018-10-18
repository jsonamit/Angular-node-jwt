import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   email: string;
   password: string;
   loginForm: FormGroup;
    massege: string;
  constructor(private FB: FormBuilder, private userservice: UserService, private router: Router)
  {
   this.loginForm = FB.group({
     email: [null, [Validators.required]],
     password: [null, [Validators.required]]
   });
  }

  ngOnInit() {
  }
  login() {
  console.log(this.loginForm.value);
  this.userservice.login(this.loginForm.value).subscribe(
    res => {
      if (res.status === 200) {
         this.massege = res.msg;
        console.log(res.msg);
        this.userservice.isAuth(res.token);
        this.router.navigate(['dashboard']);
      } else {
        console.log(res.msg);
      }
    });
  }
}
