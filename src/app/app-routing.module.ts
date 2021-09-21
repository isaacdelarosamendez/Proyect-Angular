import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ParentComponent } from './components/parent/parent.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [{
  path:'login',
  component: LoginComponent
},{
  path:'register',
  component: RegisterComponent
},{
  path:'parent',
  component: ParentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
