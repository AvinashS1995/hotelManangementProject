import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  bookingFormData!: FormGroup;

  constructor(private formbuild: FormBuilder ,private router : Router, private toaster:ToastrService){ }

  ngOnInit(){
    this.settingBookingForm();
  }
  ngAfterViewInit(){
    // this.settingBookingForm();
  }

  settingBookingForm(){
    this.bookingFormData = this.formbuild.group({
      fname: [""],
      lname: [""],
      email: [""],
      mobile: [""],
      arrivalDate: [""],
      departureDate: [""],
      guests: [],
      address: [""],
      city: [""],
      state: [""],
      pin: [""],
      paymentMethod: ["upi"]
    })
  }

  onSubmit(){
    console.log(this.bookingFormData.value);
    this.toaster.success('Hotel Booked Successfully')
    this.router.navigateByUrl('/User/usersuccess') 
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a mail';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}

