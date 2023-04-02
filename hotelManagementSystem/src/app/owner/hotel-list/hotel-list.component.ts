import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent {

  
  hotelApiData : any;
  _searchInput! : string;
  hotelList: any;

  get searchInput(){
    return this._searchInput;
  }
  set searchInput(value:string){
    this._searchInput = value;
    this.hotelApiData = this.searchHotel()
  }

  constructor(private DataServ : DataService, private router: Router , private toaster : ToastrService){ }

  ngOnInit(){
    this.letResponse()
  }

  async letResponse(){
    this.hotelList = await this.DataServ.getHotelList().toPromise()
    this.hotelApiData = this.hotelList;
      console.log(this.hotelApiData); 
  }

  onEditClicked(id:number){
    this.DataServ.edit = true;
    this.DataServ.onEditUrlSet(id);
  }

  onDeleteClicked(id: number){
    this.DataServ.onEditUrlSet(id);
    this.DataServ.deleteHotelRequest().subscribe();
    this.toaster.success('Hotel Deleted Successfully')
    this.router.navigateByUrl("/Owner/ownersuccess");
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
