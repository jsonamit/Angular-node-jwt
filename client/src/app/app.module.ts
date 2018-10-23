import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MessageService} from 'primeng/components/common/messageservice';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';
import {routing} from './routing/routing';
import {UserService} from './services/user/user.service';
import {AuthGuard} from './auth.guard';
import {InterceptorService} from './services/interceptor/interceptor.service';
import {MessagesModule} from 'primeng/primeng';
import {NoopAnimationsModule, BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    FileUploadModule,
    MessagesModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routing)
  ],
  providers: [UserService, MessageService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
