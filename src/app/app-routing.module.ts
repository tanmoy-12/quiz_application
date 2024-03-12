import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginComponent } from './login/login.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginTeacherComponent } from './login-teacher/login-teacher.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import { PasswordPopupComponent } from './password-popup/password-popup.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'user-page',
    component:UserPageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'adminlogin',
    component:LoginAdminComponent
  },
  {
    path:'studentlogin',
    component:LoginStudentComponent
  },
  {
    path:'teacherlogin',
    component:LoginTeacherComponent
  },
  {
    path:'app-password-popup',
    component:PasswordPopupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
