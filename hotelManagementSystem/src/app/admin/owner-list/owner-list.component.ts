import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent {

  ownerList : any ;
  _searchInput! : string ;
  searchOwnerList: any;

  get searchInput(){
    return this._searchInput;
  }
  set searchInput(value:string){
   this._searchInput = value.toLowerCase();
   this.searchOwnerList = this.searchOwner()
  }

  constructor(private ownerDataServ : DataService){ }

  ngOnInit(){
    this.ownerDataServ.getOwnerList().subscribe((ownerData) =>{
      this.ownerList = ownerData;
      this.searchOwnerList = this.ownerList
    })
  }
   searchOwner(){
     this.searchOwnerList = this.ownerList;

     if(this.searchInput === ''){
      return this.ownerList;
     }else{
      return this.searchOwnerList.filter((owners:any) =>{
        return JSON.stringify(owners).toLowerCase().includes(this.searchInput);
      })
     }
   }

}

