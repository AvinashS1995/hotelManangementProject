import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-success',
  templateUrl: './user-success.component.html',
  styleUrls: ['./user-success.component.scss']
})
export class UserSuccessComponent {

  hotelApiData : any;
  _searchInput! : string;
  hotelList: any;

  get searchInput(){
    return this._searchInput;
  }
  set searchInput(value:string){
    this._searchInput = value.toLowerCase();
    this.hotelApiData = this.searchHotel()

  }

  constructor(private DataServ : DataService){ }

  ngOnInit(){
    this.letResponse()
    
  }

  async letResponse(){
    this.hotelList = await this.DataServ.getHotelList().toPromise()
    this.hotelApiData = this.hotelList;  
    console.log(this.hotelApiData); 
  }

  searchHotel(){
    this.hotelApiData = this.hotelList;

    if(this.searchInput === ''){
      return this.hotelList;
    }else{
      return this.hotelApiData.filter((hotel:any) => {
        return JSON.stringify(hotel).toLowerCase().includes(this.searchInput)
      })
    }
  }

}
