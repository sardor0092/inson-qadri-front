import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layot',
  templateUrl: './layot.component.html',
  styleUrls: ['./layot.component.scss']
})
export class LayotComponent implements OnInit {

  sidebarOpen = true;
  constructor() { }
  

  sidebarToggler(){
    this.sidebarOpen = !this.sidebarOpen;
  }
  ngOnInit(): void {
  }

}
