import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';
import { OwnerSigninComponent } from './owner-signin/owner-signin.component';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';

const routes: Routes = [
  {path:'',component:OwnerSigninComponent},
  {path:'signup', loadChildren: () => import('../signup/signup.module').then((m => m.SignupModule)) },
  {path:'ownersuccess',component:OwnerSuccessComponent},
  {path:'hotel-list',component:HotelListComponent},
  {path:'hotel-registration',component:HotelRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
