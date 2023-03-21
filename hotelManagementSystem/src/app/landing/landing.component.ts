import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  hidenav = false;

  constructor(private formServ : FormService){ }

  ngOnInit(){
    this.formServ.navBtn = false;
  }
  ngOnDestroy(){
    this.formServ.navBtn = true;
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
