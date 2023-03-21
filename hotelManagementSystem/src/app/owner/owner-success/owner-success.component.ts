import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.scss']
})
export class OwnerSuccessComponent {

  constructor(private dataServ : DataService){ }
  
  editflag(){
    this.dataServ.edit = false;
  }
}
