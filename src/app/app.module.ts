import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginComponent } from './login/login.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginTeacherComponent } from './login-teacher/login-teacher.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import { PasswordPopupComponent } from './password-popup/password-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserPageComponent,
    LoginComponent,
    LoginAdminComponent,
    LoginTeacherComponent,
    LoginStudentComponent,
    PasswordPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
