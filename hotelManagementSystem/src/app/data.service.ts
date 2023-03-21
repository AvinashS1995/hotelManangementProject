import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  edit = false;
  hidenav = true;

  hotelListUrl : string = 'http://localhost:3000/hotelList/' ;
  userUrl : string = 'http://localhost:3000/users/' ;
  ownerUrl : string = 'http://localhost:3000/owner/' ;

  editHotelUrl! : string;

  constructor( private hotelhttp : HttpClient) { }

  getHotelList(){
    return this.hotelhttp.get(this.hotelListUrl);
  }

  postNewHotel(newHotel:any){
    return this.hotelhttp.post(this.hotelListUrl,newHotel)
  }

  onEditUrlSet(id:number){
    this.editHotelUrl = `${this.hotelListUrl}${id}`
  }

  onEditHotel(){
    return this.hotelhttp.get(this.editHotelUrl)
  }

  patchHotelRequest(body:any){
    console.log("pach Url", this.editHotelUrl);
    return this.hotelhttp.patch(this.editHotelUrl,body)
  }

  deleteHotelRequest(){
    return this.hotelhttp.delete(this.editHotelUrl);
  }

  getUserList(){
    return this.hotelhttp.get(this.userUrl)
  }

  getOwnerList(){
    return this.hotelhttp.get(this.ownerUrl)
  }
  
}

