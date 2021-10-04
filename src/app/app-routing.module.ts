import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentsComponent } from './components/students/students.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [{
  path:'login',
  component: LoginComponent
},{
  path:'register',
  component: RegisterComponent
},{
  path:'users',
  component: UsersComponent
},{
  path:'students',
  component: StudentsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
