import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  // userUrl : string = 'http://localhost:3000/user';

  userUrl! : string ;
  navBtn = false ;
  
  constructor( private http : HttpClient) { }
  
  
  addUser(user: any){
    console.log(this.userUrl);
    console.log(user);
    return this.http.post(this.userUrl,user);
  }
  
  customUrl( selectedModule:any ){
    this.userUrl  = `http://localhost:3000/${selectedModule}`; 
  }
  //get request 
  getData(){
    return this.http.get(this.userUrl);
  }

}
