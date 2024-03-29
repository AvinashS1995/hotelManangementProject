import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { FormsModule } from '@angular/forms';
import { AdminSuccessComponent } from './admin-success/admin-success.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { OwnerListComponent } from './owner-list/owner-list.component';


@NgModule({
  declarations: [
    AdminSigninComponent,
    AdminSuccessComponent,
    HotelListComponent,
    UserListComponent,
    OwnerListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
