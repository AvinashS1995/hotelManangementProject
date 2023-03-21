import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSuccessComponent } from './user-success/user-success.component';
import { from } from 'rxjs';
import { BookingFormComponent } from './booking-form/booking-form.component';

const routes: Routes = [
  {path:'',component:UserSigninComponent},
  {path:'signup', loadChildren: () => import('../signup/signup.module').then((m=>m.SignupModule))},
  {path: 'usersuccess', component:UserSuccessComponent},
  {path:'booking',component:BookingFormComponent}

];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
