import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccauntService } from 'src/app/core/accaunt.service';
import { JwtUtil } from 'src/app/core/jwt.util';
import { Lavozim } from 'src/app/shared/model/Lavozim';
import { User } from 'src/app/shared/model/user';

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

root = '';

@Output() changeRoute = new EventEmitter<string>();
routes!: any[];
creator = false;
admin = false;
roles!: string[];
user!: User | null;


  
  constructor(public accountService: AccauntService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private jwtUtil: JwtUtil) { }

  ngOnInit() {  this.accountService.getAuthenticationState().subscribe(
    data => {
  
      this.user = data;
        this.creator = this.accountService.hasAnyAuthority(Lavozim.SUPER_ADMIN);
        this.admin = this.accountService.hasAnyAuthority(Lavozim.ADMIN);
     
      }
  );
    
  }

  chiqish(){
    this.jwtUtil.clear();
    this.router.navigate(["/"])
    }



  

}
