import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup/signup.component';

const routes: Routes = [

  
  
  
  // {path:'User/usersuccess', loadChildren:() => import('./user/user.module').then((m=>m.UserModule))},
  
  {path:'',component:LandingComponent},
  {path:'home', redirectTo:''},

  {path:'User', loadChildren:() => import('./user/user.module').then((m => m.UserModule))},
  {path:'Admin', loadChildren:() => import('./admin/admin.module').then((m => m.AdminModule))},
  {path:'Owner', loadChildren:() => import('./owner/owner.module').then((m => m.OwnerModule))},
  {path:'signup', loadChildren:() => import('./signup/signup.module').then((m => m.SignupModule))}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



















