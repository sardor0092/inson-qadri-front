import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 opened = false;


toggleSide(){
  this.opened = !this.opened;
}


  
  constructor() { }

  ngOnInit() {
    
  }



  

}
