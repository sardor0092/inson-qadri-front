import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { JwtUtil } from 'src/app/core/jwt.util';

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




  
  constructor(private jwtUtil:JwtUtil,private router:Router) { }

  ngOnInit() {
    
  }

  chiqish(){
    this.jwtUtil.clear();
    this.router.navigate(["/"])
    }



  

}
