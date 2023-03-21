import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerSigninComponent } from './owner-signin/owner-signin.component';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';


@NgModule({
  declarations: [
    OwnerSigninComponent,
    OwnerSuccessComponent,
    HotelRegistrationComponent,
    HotelListComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OwnerModule { }
