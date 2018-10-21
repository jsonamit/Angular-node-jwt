import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addForm: FormGroup;
  name: string;
  email: string;
  password: string;
  constructor(private FB: FormBuilder, private userservice: UserService, private router: Router)
  {
    this.addForm = FB.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  ngOnInit() {
  }
  registration() {
    this.userservice.userregister(this.addForm.value).subscribe(
      res => {
        if (res.status === 200) {
          this.userservice.isAuth(res.token);
          this.router.navigate(['dashboard']);
          console.log(res.msg);
          console.log(res.token);
        } else {
          console.log(res.msg);
        }
      }
    );
  }
}
