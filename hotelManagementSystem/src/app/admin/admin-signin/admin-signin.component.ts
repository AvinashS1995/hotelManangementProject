import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.scss']
})
export class AdminSigninComponent {

  showSignin = true ;
  formValue: any;
  apiData :  any;
  matchFound : any;

  constructor(private formServ : FormService , private router : Router){ }

  showSignUpClicked(){
    this.showSignin = false ;
  }

  @ViewChild('signInForm') FormData! : NgForm;

  async onSubmit(){
    this.formValue = this.FormData.value;
    console.log(this.formValue);
    
    this.apiData = await this.formServ.getData().toPromise();
    console.log(this.apiData);

    this.matchFound = this.apiData.filter((element:any)=>{
      return element.username == this.formValue.username && element.password == this.formValue.password
    })

    console.log(this.matchFound);
    

    if(this.matchFound.length){
      alert(`Welcome ${this.matchFound[0].firstname} ${this.matchFound[0].lastname} you're successfully logged in.`);
      this.router.navigateByUrl('/Admin/adminsuccess');
    }
    else{
      alert('Admin not found');
      
    }

    // this.apiData.forEach(element => {
    //   if(this.apiData){
    //     // console.log('i am for each');
        
    //     if(element.username==this.formValue.username && element.password==this.formValue.password){
    //       this.router.navigateByUrl('/Admin/adminsuccess')
    //      }
    //   }
     
    // });
    
  }

}
