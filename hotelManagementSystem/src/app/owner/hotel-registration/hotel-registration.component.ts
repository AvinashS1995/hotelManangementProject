import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-hotel-registration',
  templateUrl: './hotel-registration.component.html',
  styleUrls: ['./hotel-registration.component.scss']
})
export class HotelRegistrationComponent {

  reactiveForm! : FormGroup ;
  // newHotelDetails:any;
  edit = false;
  editHotelDetails: any;
  

  constructor(private formbuild: FormBuilder , private DataServ : DataService){ }


  ngOnInit(){

    this.reactiveForm =this.formbuild.group({
      hotelName: [""],
      rating: [""],
      price: [""],
      roomSiz: [""],
      roomDis: [""],
      address: [""],
      availability: [""],
      image: [""]
    })
    
    
    if(this.DataServ.edit){
      this.getEditHotelInfo();
    }else{
      console.log("edit not clicked");
      
    }
    
    this.edit = this.DataServ.edit;
  }
  
  onSubmit(){
    this.editHotelDetails = this.reactiveForm.value

    console.log(this.reactiveForm.value);

    if(this.DataServ.edit){
      this.onEditHotel()
    }else{
      this.onAddHotel()
    }
    // this.newHotelDetails = this.reactiveForm.value;
    // this.reactiveForm.reset();
  }

  onAddHotel(){

    this.DataServ.postNewHotel(this.reactiveForm.value).subscribe();

    console.log(this.reactiveForm)
    
  }

  async getEditHotelInfo(){
    if(this.DataServ.edit){
      
      this.editHotelDetails = await this.DataServ.onEditHotel().toPromise()
    
      this.reactiveForm.patchValue({
        hotelName: this.editHotelDetails.hotelName,
        rating: this.editHotelDetails.rating,
        price: this.editHotelDetails.price,
        roomSiz: this.editHotelDetails.roomSiz,
        roomDis: this.editHotelDetails.roomDis,
        address: this.editHotelDetails.address,
        availability: this.editHotelDetails.availability,
        image: this.editHotelDetails.image
      })
    
    }
    
  }

  onEditHotel(){
    this.DataServ.patchHotelRequest(this.reactiveForm.value).subscribe();
  }

  
}
