import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSigninComponent } from '../user/user-signin/user-signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {path:'', component:SignupComponent},
  // {path:'User', component:UserSigninComponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
