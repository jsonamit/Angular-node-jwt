import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user/user.service';
import {Router} from '@angular/router';
import {Message} from 'primeng/components/common/api';
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
  msgs: Message[] = [];
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
          this.msgs = [];
          this.msgs.push({severity: 'Success', summary: 'Success:', detail: res.msg});
          setTimeout(() => {
            this.router.navigate(['dashboard']);
          }, 100);
        } else {
          console.log(res.msg);
          this.msgs = [];
          this.msgs.push({severity: 'Error', summary: 'Error:', detail: res.msg});
        }
      }
    );
  }
}
