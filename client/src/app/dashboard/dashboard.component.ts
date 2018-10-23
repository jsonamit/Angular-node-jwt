import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user/user.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Message} from 'primeng/components/common/api';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   users: any = [];
  uploadedFiles: any[] = [];
  msgs: Message[] = [];
  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {

    // this.userservice.getallUser().subscribe(
    //   res => this.users = res.data,
    //    err => {
    //     if ( err instanceof HttpErrorResponse) {
    //        if (err.status === 401) {
    //          this.router.navigate(['login']);
    //        }
    //     }
    // }
    // );

    this.userservice.getuserProfile().subscribe(
      res => this.users = res.data,
      err => {
        if ( err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['login']);
          }
        }
      }
    );
  }
  onupload(event) {
    this.msgs = [];
    this.msgs.push({severity: 'Success', summary: 'Success:', detail: 'image'});
    console.log(event.files);
  }
}
