import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tashkilot-ariza',
  templateUrl: './tashkilot-ariza.component.html',
  styleUrls: ['./tashkilot-ariza.component.scss']
})
export class TashkilotArizaComponent implements OnInit {


  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
