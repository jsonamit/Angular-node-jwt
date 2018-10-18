import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, private userservice: UserService) { }

  ngOnInit() {
  }
  login()
  {
    this.route.navigate(['login']);
  }
  register()
  {
    this.route.navigate(['register']);
  }
  dashboard()
  {
    this.route.navigate(['dashboard']);
  }
}
