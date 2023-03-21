import { Component } from '@angular/core';
import { FormService } from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotelManagementSystem';
  navBtn!: boolean;
  
  constructor( private formServ : FormService){ }
  
  ngDoCheck(){
    this.navBtn = this.formServ.navBtn;
  }

  userSelectedModule(){

    let selectedModule = 'users';
    this.formServ.customUrl(selectedModule);
    
  }

  adminSelectedModule(){

    let selectedModule = 'admins';
    this.formServ.customUrl(selectedModule); 
  }

  ownerSelectedModule(){

    let selectedModule = 'owner';
    this.formServ.customUrl(selectedModule);
  }
}
