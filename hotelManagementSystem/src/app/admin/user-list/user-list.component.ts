import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  userList : any ;
  _searchInput! : string ;
  searchUserList : any ;

  get searchInput(){
    return this._searchInput;
  }
  set searchInput(value:string){
     this._searchInput = value.toLowerCase();
     this.searchUserList = this.searchUsers();
  }

  constructor(private userDataServ : DataService){ }

  ngOnInit(){
    this.userDataServ.getUserList().subscribe((userData) =>{
      this.userList = userData ;
      this.searchUserList = this.userList
    })

  }

  searchUsers(){
    this.searchUserList = this.userList;

    if(this.searchInput === ''){
      return this.userList;
    }else{
      return this.searchUserList.filter((users:any) => {
        return JSON.stringify(users).toLowerCase().includes(this.searchInput)
      })
    }
  }

}
