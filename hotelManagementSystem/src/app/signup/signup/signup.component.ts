import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  reactiveForm! : FormGroup ;
  hide: boolean = true;
  hideNoti = true;
  pass! : string;
  cpass! : string;
  match! : boolean;

  constructor( private formServ : FormService){ }


  ngOnInit(){
    
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null,[Validators.required,this.noSpaceAllowed]),
      lastname: new FormControl(null,[Validators.required,this.noSpaceAllowed]),
      mobile: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      username: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required),
      confirmpassword: new FormControl(null,Validators.required),
      gender: new FormControl(null),
      country: new FormControl('India'),
      hobbies: new FormControl(null)
    });

  }
  
  onSubmit(){

    console.log(this.reactiveForm);
    // this.reactiveForm.reset();
  }

  onAddUser(){

    let user = this.reactiveForm.value;

    this.formServ.addUser(user).subscribe((data)=>{console.log(data);
    })
    console.log(user)
    this.hide = false;
  }

  notificationOff(){
    this.hideNoti = false;
  }

  noSpaceAllowed( control : FormControl){
    if(control.value != null && control.value.indexOf(' ') != -1){ 
      return {noSpaceAllowed : true}
    }
    return null;
  }

  getPass(passInput:string){
    this.pass = passInput;
    console.log(this.pass); 

    if(this.cpass){
      if(this.pass === this.cpass){
        console.log('password matched');
        this.match = true;
      }
      else{
        console.log('password not matched');
        this.match = false;
      }
    }
  }

  getCpass(CpassInput:string){
    this.cpass = CpassInput;
    console.log(this.cpass);
    
    if(this.cpass){
      if(this.cpass === this.pass){
        console.log('password matched');
        this.match = true; 
      }
      else{
        console.log('password not matched');
        this.match = false; 
      }
    }
  }
}
